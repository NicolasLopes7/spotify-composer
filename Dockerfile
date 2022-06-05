FROM node:16-slim as BUILDER

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY src ./src
COPY tsconfig.json ./

RUN yarn build
COPY build ./build

FROM node:16-alpine

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app ./

EXPOSE 3000

CMD ["yarn", "dev"]