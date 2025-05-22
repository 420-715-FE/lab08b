<?php

function generateHTMLHeader($pageTitle) {
?>
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?= $pageTitle ?></title>
        <link rel="stylesheet" href="public/css/water.css" />
        <link rel="stylesheet" href="public/css/gallery.css" />
        <script async src="public/js/etape1.js"></script>
        <script async type="module" src="public/js/etape2.js"></script>
    </head>
<?php
}

?>
