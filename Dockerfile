FROM node:0.12.2

RUN npm cache clean && npm install
WORKDIR /tmp
ADD . /tmp

EXPOSE 3000
ENTRYPOINT ["node", "/tmp/scripts/server.js"]
