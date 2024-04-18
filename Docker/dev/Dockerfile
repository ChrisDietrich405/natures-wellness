FROM node:alpine 

WORKDIR /react-app

COPY package.json .

COPY . .

RUN npm install --legacy-peer-deps

CMD [ "npm", "run", "dev" ]
 