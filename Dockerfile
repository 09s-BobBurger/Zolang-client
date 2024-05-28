FROM node:20 as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/sites-available/default.conf

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]