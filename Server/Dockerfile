FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package files first for efficient caching
COPY package*.json ./

# Install dependencie

# Copy the rest of the application code
COPY . .

# Copy the wait-for script into the container
# COPY wait-for.sh /wait-for.sh
# RUN chmod +x /wait-for.sh

# Expose backend port
EXPOSE 3001

# Wait for MongoDB and then start the app
CMD ["npm", "start"]
