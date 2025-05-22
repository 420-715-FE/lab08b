const BASE_URL = 'http://localhost:8080/lab08a/api/';

async function testAPI() {
    console.log("=====================\n====== ÉTAPE 1 ======\n=====================");

    // Test de GET /api/albums
    let request = await fetch(`${BASE_URL}albums`);
    if (!request.ok) {
        console.error(`Erreur lors de la récupération des albums: ${request.status} ${request.statusText}`);
        return;
    }
    let albums = await request.json();
    console.log('Résultat de GET api/albums:', albums);

}

testAPI();
