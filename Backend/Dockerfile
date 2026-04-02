# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of code
COPY . .

# Expose port
EXPOSE 5000

# Run app
CMD ["npm", "start"]