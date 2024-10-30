# Use a Node.js 10.x image as a base (closest available to 10.8.3)
FROM node:10-buster

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install the necessary dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (default for most Node apps is 3000)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

