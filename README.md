# Application Web Immersive

## Description

Ce projet est une application web fullstack conçue pour offrir une expérience utilisateur immersive. Elle est développée avec React.js pour le frontend et Django avec Django Rest Framework pour le backend. L'objectif de cette application est de démontrer les compétences en développement web et en design UX/UI.

## Conception UX/UI (Figma)

Le design de l'application a été réalisé avec Figma. Vous pouvez visualiser les maquettes en suivant[ [ce lien](https://www.figma.com/file/xyz). ](https://www.figma.com/design/4pRoAuBH1leTqOCvD8YjL2/Untitled?node-id=0-1&t=eDEksFX0MjHcAIy4-0)Les éléments suivants ont été inclus dans le design :

- **Écran d'accueil** : Une page d'accueil attrayante présentant les principales fonctionnalités de l'application avec des visuels captivants et un texte clair.
- **Interaction/animation** : Des animations subtiles en réponse aux actions de l'utilisateur, telles que des transitions fluides lors du survol des boutons ou des liens, créant une expérience dynamique et engageante.
- **Écran de feedback** : Des éléments de feedback visuel pour fournir des réponses claires aux actions de l'utilisateur, comme des messages de confirmation après une action réussie ou des messages d'erreur pour guider l'utilisateur en cas de problème.

## Installation et Exécution de l'Application

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les logiciels suivants sur votre machine :

- Node.js et npm
- Python et pip
- Django
- Django Rest Framework

### Installation du Frontend (React.js)

```sh
# Accédez au dossier frontend
cd frontend

# Installez les dépendances
npm install

# Démarrez le serveur de développement
npm start
# Accédez au dossier backend
cd backend

# Créez un environnement virtuel
python -m venv venv
source venv/bin/activate   # Sur Windows, utilisez `venv\Scripts\activate`

# Installez les dépendances
pip install -r requirements.txt

# Appliquez les migrations de la base de données
python manage.py migrate

# Démarrez le serveur backend
python manage.py runserver

#Commandes Git
#Cloner le Dépôt
git clone https://github.com/MoussamihSoukaina/test.git
# Ajoutez tous les fichiers modifiés
git add .

# Effectuez un commit avec un message
git commit -m "Description de vos modifications"

# Poussez les modifications vers le dépôt distant
git push origin master

#Structure du Projet
#Un lien de démo
frontend/ : Contient le code source du frontend développé avec React.js.
Web Interface                 http://127.0.0.1:4040                                                                     Forwarding                    https://7f68-105-71-135-202.ngrok-free.app -> http://localhost:3000    
backend/ : Contient le code source du backend développé avec Django et Django Rest Framework.
Web Interface                 http://127.0.0.1:4040                                                                     Forwarding                    https://e405-105-71-135-202.ngrok-free.app -> http://localhost:8000                                                                                                                              
