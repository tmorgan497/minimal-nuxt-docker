FROM node:20.10.0-alpine AS dev
ENV HOST 0.0.0.0

WORKDIR /app

COPY package.json ./

RUN yarn cache clean && yarn install

COPY . .
