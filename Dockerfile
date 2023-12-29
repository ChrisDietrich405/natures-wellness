# Use an official Node.js runtime as a base image
FROM node:18.18.2

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose a port that the app will run on
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "run", "dev" ]
