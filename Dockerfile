FROM node:20.11.0-alpine

WORKDIR /usr/src/app/public
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src

CMD npm start

# --omit=optional
