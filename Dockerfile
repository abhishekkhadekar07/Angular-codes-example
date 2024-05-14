# Use an official Node.js runtime as the base image
FROM node:21-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular project files
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Use a smaller, Alpine-based image for the final image
FROM nginx:alpine

# Copy the built Angular app from the build stage
COPY --from=build /usr/src/app/dist/my-angular-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
