FROM node:14
WORKDIR /usr/src/app
COPY ./codexbox_project/package*.json /usr/src/app/
RUN npm install
COPY ./codexbox_project/ /usr/src/app/
EXPOSE 3000 
CMD [ "node", "index.js" ]
