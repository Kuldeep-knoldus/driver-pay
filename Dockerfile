FROM node:20-alpine3.20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .

RUN ng build
FROM nginx:latest
#COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /var/log/app_engine
COPY --from=build /app/dist/driver-pay/* /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
