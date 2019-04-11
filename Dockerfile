FROM node:8
WORKDIR /usr/src/txt/user
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD [ "npm", "run-script install"]
CMD [ "npm", "start" ]