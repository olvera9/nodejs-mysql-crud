FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY img img
COPY src src
EXPOSE 3000
CMD [ "npm", "start" ]
