FROM node:20.9.0-alpine

WORKDIR /app

COPY package.json .

COPY . .

RUN rm -rf node_modules yarn.lock yarn-error.log

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]