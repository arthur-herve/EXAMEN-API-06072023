Question 1 :
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


