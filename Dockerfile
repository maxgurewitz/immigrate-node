FROM node:0.12.2-onbuild

RUN npm cache clean && npm install

EXPOSE 3000
