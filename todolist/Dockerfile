# Base image for building
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install && npm install --save-dev sass

# Copy source files including .env (Vite reads during build)
COPY . .

# Build the app
RUN npm run build

# Base image for serving
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy build output from previous stage
COPY --from=build /app/dist ./dist

# Expose the port used by Vite/serve
EXPOSE 5173

# Start the static app
CMD ["serve", "-s", "dist", "-l", "5173"]
