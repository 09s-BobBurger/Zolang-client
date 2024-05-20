# 1단계: 애플리케이션 빌드
FROM node:20 as build

WORKDIR /app

# package.json 및 yarn.lock 파일 복사하여 종속성 설치
COPY package.json yarn.lock ./
RUN yarn install

# 소스 코드 복사
COPY . .

# 애플리케이션 빌드
RUN yarn build

# 2단계: 정적 파일 제공을 위한 Nginx 이미지
FROM nginx:latest

# 빌드된 파일을 Nginx로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# 기본 Nginx 설정 파일 제거
RUN rm /etc/nginx/conf.d/default.conf

# 사용자 정의 Nginx 설정 파일 복사
COPY nginx/nginx.conf /etc/nginx/conf.d

# Nginx가 리스닝할 포트 설정
EXPOSE 80

# Nginx 서버 시작
CMD ["nginx", "-g", "daemon off;"]
