FROM node:alpine 

ENV NODE_ENV = production

WORKDIR /react-app

COPY ./package.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build 

EXPOSE 3000

CMD [ "npm", "start" ]
