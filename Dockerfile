FROM node:iron-alpine3.19 AS base_image
RUN apk update
RUN npm install --global pnpm@9.6.0

FROM base_image AS installer
WORKDIR /app/
COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install

FROM installer AS builder
WORKDIR /app/
COPY --from=installer /app/ .
COPY . .
EXPOSE 3000 3000
RUN pnpm build
CMD pnpm start
