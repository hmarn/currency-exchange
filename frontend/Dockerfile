FROM node:16.14.0

WORKDIR /usr/src/app

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

ENTRYPOINT [ "npm" ]

CMD ["start"]