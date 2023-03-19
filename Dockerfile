FROM node:16
VOLUME /opt/app/data
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

ENV PORT=8888
ENV SQLITE=/opt/app/data/recipe-book.sqlite
EXPOSE 8888
CMD [ "npm", "start" ]
