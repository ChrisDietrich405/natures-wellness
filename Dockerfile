FROM node:alpine 

WORKDIR /react-app

COPY package.json /react-app

RUN npm install 

COPY . .

# Define the command to run the application
CMD [ "npm", "run", "dev" ]
