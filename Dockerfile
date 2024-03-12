FROM node:current-alpine3.19

USER node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node

WORKDIR /home/node

COPY package*.json .

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]