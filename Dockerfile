FROM node:alpine 

WORKDIR /react-app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build 

CMD [ "npm", "start" ]
