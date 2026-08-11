# G2G Tech CRM

Plateforme de gestion IT, cloud et services managés développée par **G2G Tech**.

## 🚀 Stack Technique

- **Frontend** : React 18 + TypeScript + Vite
- **UI** : Tailwind CSS + shadcn/ui + Radix UI
- **Backend** : Node.js (Express) — dossier `backend/`
- **Base de données** : MongoDB (via Mongoose)
- **Déploiement** : Netlify (frontend) + Railway (backend)

## 📦 Installation locale

```bash
# Cloner le projet
git clone https://github.com/tayman-g2gtech/g2gtech.git
cd g2gtech

# Installer les dépendances frontend
npm install

# Lancer le serveur de développement
npm run dev
```

Le frontend sera accessible sur [http://localhost:8080](http://localhost:8080).

## 🔧 Backend

```bash
cd backend
npm install
npm start
```

## 🏗️ Build de production

```bash
npm run build
```

Les fichiers buildés seront dans le dossier `dist/`.

## 🌐 Déploiement

- **Frontend** → [Netlify](https://netlify.com) : répertoire `dist/`, commande `npm run build`
- **Backend** → [Railway](https://railway.app) : détection automatique via `Dockerfile`

## 📄 Licence

ISC — G2G Tech © 2025
