FROM openjdk:8-jdk-alpine

COPY package.json /src/package.json
RUN  cd /src; npm install --silent
COPY .. /src
EXPOSE 3000
WORKDIR /src

CMD npm run start