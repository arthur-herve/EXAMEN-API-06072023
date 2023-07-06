## Question 1 :
La première commande que j'ai éxecutée est la suivante
`npm init`

```bash
package name: (examen-api-06072023) ExamenAPIEsgi
Sorry, name can no longer contain capital letters.
package name: (examen-api-06072023) examen-api-esgi
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author: Arthur HERVE
license: (ISC)
About to write to C:\Users\agehe\Desktop\examen-api-06072023\package.json:
```
  
Cette commande créé un fichier package.json qui contient la base des données d'un projet Node. Le contenu pour les réponses que j'ai données précédemment est le suivant :  
```json
{
  "name": "examen-api-esgi",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Arthur HERVE",
  "license": "ISC"
}
```

Bien que je n'ai pas encore installé de package sur mon projet, j'execute npm install. Dans un projet node, npm install permet d'automatiquement installer tous les modules dans un dossier node-modules. A ce stade le dossier node-modules n'est pas encore créé. On peut cependant remarquer un fichier package-lock.json  

Le fichier package-lock.json conserve les informations de toutes les versions des modules installés ainsi que les dépendances de ceux-ci. Ce fichier permet la compatibilité du projet pour tous les utilisateurs.  

## Question 2 :
Node.js est un environnement créé pour javascript et en open source. Il permet d'executer du code javascript. Cet environnement offre la possibilité de créer des projets complexe en simplifiant l'installation sur ordinateur personnel et sur serveur de production. Il permet de gérer des packages et est utilisé pour des projet web avec pour le frontend des frameworks comme Angular ou React. On peut aussi réaliser des Api REST avec la librairie ExpressJS.  


Pour faire tourner un programme il faut ajouter un script de démarrage. J'ai installé le package nodemon à l'aide de la commande `npm install -D nodemon` afin que celui-ci écoute les changement et éxecute régulièrement le code :  
Dans package.json :  
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  },
```

Et :

```json
"devDependencies": {
    "nodemon": "^2.0.22"
  }
```

Je l'ai installé en dev afin que ce package ne soit pas considéré comme un package à installer en prod (on exécute alors : `npm install --production`).  

Je peux executer le code suivant aparaissant en console après avoir lancer `npm run dev`
```javascript
console.log('hello world')
```

ou encore :

```javascript
function addition(a, b) {
  return a + b;
}
console.log(addition(5, 9));

```
## Question 3:
Pour utiliser express, il faut l'installer à l'aide de la commande `npm install express`. Cette commande ajoute un module dans node_modules, met à jour package.json et package-lock.json.  
Dans package.json cela ajoute une dépendance telle que :

```javascript
"dependencies": {
    "express": "^4.18.2"
  }
```

Sachant que package-lock.json contient des informations très détaillées, je ne vais pas montrer son contenu.


## Question 4:
Express est une librairie ou framework en fonction des sources, qui permet de réaliser des applications web avec une première version en 2010. Elle est populaire pour ses performances, sa cohérence entre un frontend en javascript et un backend de même en javascript. (https://expressjs.com)  
Expressjs est utilisé dans le backend afin de gérer les requêtes et les réponses dans le cadre d'une API REST. Express se base sur node.js pour son fonctionnement. 

## Question 5:
Pour initialiser un projet express on peut utiliser la commande suivante : `npx express-generator`. La commande installe les dépendances de base ainsi que les dossier génériques d'un projet express.  
Express va permettre de gérer une interface de communication entre terminaux. Elle récupère une requête au format http, elle traite cette requête via différentes étapes : 
On a les routes. Ce sont des fonctions qui récupère la requête si et seulement si celle-ci est au bon format (POST, GET, UPDATE, PUT ...) avec la bonne adresse.  
Des middleware qui sont des fonctions faisant un prétraitement de la requêtes, ils vont tester l'authentification par exemple, la vérification du contenu de la requête.   
Ensuite on aura les fonctions en elles-même qui sont contenues dans les controllers. Ces controllers qui vont pouvoir exécuter des requêtes auprès d'une base de données, ou plus simplement vers une autre API. Les controllers vont s'aider des model qui sont les formats des requêtes, SQL ou MongoDB par exemple. ENfin on a les views qui sont utilisées lorsque l'on doit renvoyer du contenu visuel pour les pages web.  

Les MVC soit le Model View Controller est une première birque des projets express. C'est ce que l'on a décrit plus haut avec le cheminement des requêtes avec les Controllers, les Models et les Views.  

Une deuxième brique de fonctionnement d'un projet express est le principe REST que l'on aborde dans la question suivante.   
On pourra mettre en avant la caractéristique d'un projet Express qui est celle du stateless. Les terminaux ne doivent pas partager d'informations c'est une demande réponse executée avec un minimum d'information où le programme utilisant espress ne doit absolument pas stocker d'informations. Les configurations, les clefs chiffrage sont internes et ne sont pas partagées.

## Question 6:
Pour reprendre le cours, une API (pour Application Programming Interface) est une interface entre deux terminaux. Elle permet par exemple de récupérer les identifiants d'un utilisateur qui se connecte à Amazon sur son navigateur. Ce type d'API est ce qu'on appelle le backend d'une application web. Cette API fera dans ce cas là l'interface entre la base de données et le frontend de l'application. Pour payer sur Amazon en utilisant une carte bancaire, on passera par une API nous connectant à notre banque. Certaines applications permettront de récupérer des données de transports à l'aide de l'API de la sncf, la météo grâce à l'API de météo france et ainsi de suite.  
Le principe REST (pour REpresentation State Transfer), est le standard de construction des APIs. Le rôle de ce standard est d'avoir une architecture cohérente, respectant une nomenclature globale. Cela comprend la forme des requêtes, le contenu de celles-ci, le type de requêtes...   
Le principe est de créer une liste d'URI (pour Uniform Resource Identifier), comme des URLs. Cela permet d'avoir une référence à l'opération à effectuer, un GET avec une certaine URL demandera de récupérer et de renvoyer certaines données.
mdn : (https://developer.mozilla.org/fr/docs/Glossary/URI)
wikipédia : (https://fr.wikipedia.org/wiki/Representational_state_transfer)

## Question 7:
La modification a déjà été faite à la question d'avant.

## Question 8:
Une Promise est une valeur retournée de manière asynchrone. Lors de l'execution d'un code Javascript il est parfois nécessaire de forcer une asynchronie lorsque des éléments du programmes doivent absolument récupérer une valeur. Par exemble une requête à la BDD peut prendre du temps et il est nécessaire de récupérer les informations valides ou l'erreur avant de continuer l'exécution du programme.

## Question 9 : 
C'est déjà fait question  3 (2 sans le nom et prénom) Pour un peu plus de détail, ce module facilite le travail du développeur en rechargeant automatiquement le code sans avoir à relancer manuellement l'application.

## Question 10 : 
Avec le try catch.
Avec le try catch.
```javascript
  try {
    const unNombre = 2;
    if (unNombre === 2) {
      throw TypeError.name;
    }
  } catch (error) {
    console.log(error);
  }
```
Ici j'ai posé un faux problème qui renvoie une erreur TypeError, ce sont des erreurs qui s'affichent quand il y a un conflit de type, c'est utilisé en typescript.  

On pourra l'utiliser pour renvoyer une erreur au client : 
```javascript
const examenGET = (req, res) => {
  try {
    const unNombre = 2;
    if (unNombre === 2) {
      throw TypeError.name;
    }
    res.status(200).send(htmlExamenPage);
  } catch (error) {
    res.status(400).send('unNombre !== 2');
  }
  
};
```

## Question 11:

On va chercher dans un objet au format JSON les données. Les requêtes on un format prédéfini et théoriquement universelles pour les API REST. On aura toujours à chercher aux toujours aux mêmes endroits le header, l'authentification et le tokenet le body. On va chercher dans le le corps les données que le client nous a envoyées. Normalement on est censé vérifier le contenu de multiples manières, ici je n'ai pas le temps de le faire.

```javascript
const examenPOST = (req, res) => {
  try {
    const body = req.body;
    res.status(200).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
};
```