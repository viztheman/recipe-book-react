FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

ENV PORT=8888
EXPOSE 8888
CMD [ "npm", "start" ]
