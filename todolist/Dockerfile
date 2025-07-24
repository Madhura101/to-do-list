# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install && npm install --save-dev sass

# Copy all source files
COPY . .

# Build the app
RUN npm run build

# Install serve globally to serve static build
RUN npm install -g serve

# Start the app
CMD ["serve", "-s", "dist", "-l", "5173"]

# Expose the port used by Vite/serve
EXPOSE 5173
