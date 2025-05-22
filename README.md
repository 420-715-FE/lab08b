# Laboratoire 08-B

Ce dépôt reprend la solution du Laboratoire 08-A. Il y ajoute deux routes d'API, soit `GET /api/photos` et `GET /api/photos/{id}`, puis un deuxième modèle sur le frontend, soit `PhotosModel` dans le fichier `public/js/photosModel.js`. De plus, il ajoute une fonctionnalité permettant de créer un nouvel album. Cette fonctionnalité est implémentée entièrement en JavaScript côté client à l'aide de manipulations du DOM et de requêtes AJAX. Le code de cette fonctionnalité se trouve dans `public/js/controller.js`.

Votre mission, si vous l'acceptez, est de vous inspirer du code existant pour ajouter les fonctionnalités de suppression d'un album et d'ajout de photos à un album. Vous pouvez aussi vous référer à la documentation du DOM sur [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model).

## Suppression d'un album

* Vous devez d'abord modifier la vue `albums.php` pour ajouter un lien de suppression sous forme de `[X]` à côté de la description de chaque album.
* Ensuite, côté JavaScript, ajoutez un *event listener* permettant de détecter le clic sur un lien de suppression.
* Suite au clic, il faut appeler la méthode `albumsModel.delete` en lui passant l'ID du bon album.
* Si la suppression réussit, il faut retirer l'album du DOM. Sinon, il faut afficher un message d'erreur (par exemple avec `alert`).

## Ajout d'une photo à un album

* Modifiez d'abord la vue `view_album.php`. Vous voulez ajouter un petit formulaire « Ajouter à un album » sous les informations de la photo. Ce formulaire doit contenir seulement une liste déroulante des noms des albums, et un bouton Valider. Ce bouton doit être de type `button` et non `submit`, car on ne veut pas que l'action par défaut de soumission du formulaire soit effectuée.
    * Inspirez-vous du formulaire de création d'un album.
* Ensuite, côté JavaScript, il faut ajouter un *event listener* sur le clic du bouton que vous venez de créer.
* Suite au clic, il faut appeler la méthode appropriée d'`albumsModel` en lui passant les informations nécessaires pour ajouter la photo au bon album.
* Affichez un message à l'utilisateur indiquant le résultat (réussite ou échec).
