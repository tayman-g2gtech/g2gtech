# Backend Dockerfile (Node.js ESM) — Production
FROM node:20

WORKDIR /app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install --omit=dev

# Copier tout le backend
COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
