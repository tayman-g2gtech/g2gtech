# Backend Dockerfile (Node.js ESM)
FROM node:20

WORKDIR /app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le backend
COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
