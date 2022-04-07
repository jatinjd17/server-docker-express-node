FROM node:12

ENV PORT 1000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

EXPOSE 1000

# Running the app
CMD "node" "index.js"