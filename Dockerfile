# Step 1: Build the Vite React app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy dependency definition files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project for production
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the built assets from the build stage into Nginx's serving directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Vercel/Web traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
