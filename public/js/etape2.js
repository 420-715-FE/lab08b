import AlbumsModel from "./albumsModel.js";

async function testAPI() {
    console.log("=====================\n====== ÉTAPE 2 ======\n=====================");
    const albumsModel = new AlbumsModel("http://localhost:8080/lab08a/api/");

    // Test getAll
    console.log("Test getAll");
    try {
        const albums = await albumsModel.getAll();
        console.log("Albums: ", albums);
    } catch (error) {
        console.error("Error in getAll: ", error);
    }

}

// Lorsque vous êtes prêt(e) à faire l'étape 2, décommentez la ligne ci-dessous et commentez la même ligne dans l'étape 1.
// testAPI();
