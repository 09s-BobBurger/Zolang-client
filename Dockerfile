# Node.js를 사용하여 빌드
FROM node:20 as build

WORKDIR /app

# 패키지 매니저 파일 복사 및 의존성 설치
COPY package.json yarn.lock ./
RUN yarn install

# 소스 코드 복사 및 빌드
COPY . .
RUN yarn build

# Nginx를 사용하여 정적 파일 서빙
FROM nginx:latest

# 빌드된 파일을 Nginx의 기본 html 디렉토리에 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 설정 파일 복사
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# SSL 인증서를 저장할 디렉토리 생성
RUN mkdir /etc/nginx/ssl

# SSL 인증서와 키 파일 복사
COPY ./zolang.site+1.pem /etc/nginx/ssl/zolang.site+1.pem
COPY ./zolang.site+1-key.pem /etc/nginx/ssl/zolang.site+1-key.pem

# 포트 443 노출
EXPOSE 443

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
