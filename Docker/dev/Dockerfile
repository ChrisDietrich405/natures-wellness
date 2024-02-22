FROM node:alpine 

WORKDIR /react-app

COPY package.json .

RUN npm install --legacy-peer-deps

CMD [ "npm", "run", "dev" ]
