FROM node:latest

RUN mkdir /node
WORKDIR /node
COPY ./package*.json /node
RUN npm install
COPY . .
RUN npm run build
FROM nginx
COPY --from=builder /node/build /usr/share/nginx/html
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
