# Build stage
FROM timbru31/java-node:8-20 AS build

RUN mkdir -p /tmp/shortscript

WORKDIR /tmp/shortscript

COPY package*.json ./
COPY . ./

RUN npm ci

RUN npm run build:grammar
RUN npm run build:examples
RUN npm run build

# Production stage
FROM node:20-alpine as prod

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
USER node

# Copy built files from the build stage
COPY --from=build /tmp/shortscript/build ./build
# COPY --from=build /home/node/app/node_modules ./node_modules
# COPY --from=build /home/node/app/package*.json ./
RUN npm init -y

RUN npm install serve@14.2.3 \
  && npm cache clean --force \
  && rm -rf /tmp/*

EXPOSE 8080

CMD [ "npx", "serve", "-p", "8080", "build" ]
