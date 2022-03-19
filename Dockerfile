# Building stage
FROM node:16.14-alpine3.14 AS builder

ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN npm install --production --silent
RUN npm run build

# Final stage
FROM node:16.14-alpine3.14
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist .
COPY package.json .
RUN npm install --production --silent
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "bootstrap.ts"]