# Frontend Dockerfile (Vite/React)
FROM node:20

WORKDIR /app

# Copier uniquement les fichiers nécessaires
COPY package*.json ./
RUN npm install

# Copier tout le code
COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host"]
