FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm i -g yarn
RUN yarn install --force

COPY . .

RUN yarn build

CMD ["yarn", "start"]