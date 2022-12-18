FROM node:14.19.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 3000

# ENTRYPOINT [ "npm" ]

CMD ["npm", "run", "start"]