FROM node:11
WORKDIR /
COPY package*.json ./

RUN npm install
RUN npm install -g grunt-cli
RUN npm install grunt
RUN npm install grunt-shell
RUN npm install grunt-nodemon
COPY . .
EXPOSE 4000
EXPOSE 27017
CMD [ "grunt" ]
