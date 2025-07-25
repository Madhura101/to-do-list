# Use Node.js Alpine as base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package files first for efficient Docker caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy rest of the application code
COPY . .

# Expose the backend port
EXPOSE 3001

# Run the backend using Node.js in production
CMD ["node", "index.js"]
