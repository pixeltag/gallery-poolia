FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "/app/core-frontend"]
CMD ["node", "/app/core-frontend/build/index.html"]
RUN yarn install --production
CMD ["node", "/app/src/index.js"]