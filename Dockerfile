# Utiliser une image Node.js officielle
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json /app/

# Installer les dépendances
RUN npm install

RUN npm install -g nodemon

# Copier le reste des fichiers
COPY . /app/

# Commande par défaut pour lancer le script
CMD ["npm", "start"]