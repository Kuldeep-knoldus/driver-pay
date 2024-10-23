# Stage 1: Build the Angular application
FROM node:21 AS build

# Set the working directory in the container
WORKDIR /app

# Add a unique argument to invalidate cache when package.json changes
ARG CACHEBUST=1

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular app in production mode
RUN ng build

# Use the official Nginx image as the final base image
FROM nginx:latest

# Copy the built app from the previous stage to the nginx web server directory
COPY --from=build /app/dist/driver-pay /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the Docker environment
EXPOSE 80

# Command to run nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
