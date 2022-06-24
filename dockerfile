FROM node:14
WORKDIR /usr/src/app
COPY ./codexbox-project/package*.json /usr/src/app/
RUN npm install
COPY ./codexbox-project/ /usr/src/app/
EXPOSE 3000 
CMD [ "node", "index.js" ]
