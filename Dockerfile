FROM node:20-alpine

COPY /.output/public .

EXPOSE 80

CMD ["node", "."]