# syntax=docker/dockerfile:1

FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000