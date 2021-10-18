FROM node:lts-alpine AS build
WORKDIR /var/server

COPY . .

# Prepare
RUN ["yarn"]
RUN ["yarn", "build"]

# Move build to new container
FROM node:lts-alpine
WORKDIR /var/server

COPY --from=build /var/server/ /var/server/
#COPY package.json /var/server/package.json
#COPY ormconfig.json /var/server/ormconfig.json

RUN ["npm", "install", "-g", "nodemon", "--silent"]
RUN ["npm", "install", "-g", "@nestjs/cli"]
RUN ["apk", "add", "--no-cache", "bash"]

RUN ["yarn"]

EXPOSE 8888
