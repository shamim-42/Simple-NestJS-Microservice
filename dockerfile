FROM node:12
WORKDIR /app/products
COPY package.json package.lock.json /app/products/

RUN npm cache clean --force && npm install --no-optional

COPY . /app/products/

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 8080

RUN npm run build

CMD ["npm", "start"]
