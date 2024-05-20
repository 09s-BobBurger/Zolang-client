FROM node:20 as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build
FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir /etc/nginx/ssl

COPY ./zolang.site+1.pem /etc/nginx/ssl/zolang.site_1.pem
COPY ./zolang.site+1-key.pem /etc/nginx/ssl/zolan.site+1-key.pem

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
