FROM node:8

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]