# Stage 1: Build the React app
FROM node:20 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the build using Nginx
FROM nginx:alpine

# Copy build output to Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html
# Copy custom Nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]