import AlbumsModels from './albumsModel.js';
import PhotosModels from './photosModel.js';

let albumsModel = new AlbumsModels("http://localhost:8080/lab08b/api/");
let photosModel = new PhotosModels("http://localhost:8080/lab08b/api/");

let addAlbumCard = document.querySelector("#add_album");
let addAlbumCardHTML = addAlbumCard.innerHTML;

let onAddAlbumCardClick = () => {
    let photos = photosModel.getAll();

    addAlbumCard.innerHTML = `
    <form>
        <label for="album_name">Nom de l'album</label>
        <input type="text" id="album_name" />
        <label for="featured_photo">Photo de couverture</label>
        <select id="featured_photo"></select>
        <div style="display: flex; justify-content: space-around;">
            <input type="button" id="submit" value="Valider">
            <input type="button" id="cancel" value="Annuler">
        </div>
    </form>
    `;
    let featuredPhotoSelect = addAlbumCard.querySelector("#featured_photo");
    photos.then((photos) => {
        photos.forEach(photo => {
            let option = document.createElement("option");
            option.value = photo.id;
            option.textContent = photo.description;
            featuredPhotoSelect.appendChild(option);
        });
    });

    addAlbumCard.removeEventListener('click', onAddAlbumCardClick);

    addAlbumCard.querySelector("#submit").addEventListener('click', () => {
        let albumName = addAlbumCard.querySelector("#album_name").value;
        let featuredPhotoId = addAlbumCard.querySelector("#featured_photo").value;

        if (albumName && featuredPhotoId) {
            albumsModel.create({ name: albumName, featured_photo_id: featuredPhotoId })
                .then(() => {
                    addAlbumCard.innerHTML = addAlbumCardHTML;
                    addAlbumCard.addEventListener('click', onAddAlbumCardClick);
                })
                .catch((error) => {
                    console.error("Error creating album:", error);
                });
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });

    addAlbumCard.querySelector("#cancel").addEventListener('click', () => {
        addAlbumCard.innerHTML = addAlbumCardHTML;
        setTimeout(() => 
            addAlbumCard.addEventListener('click', onAddAlbumCardClick)
        , 0)
    });
};

addAlbumCard.addEventListener('click', onAddAlbumCardClick);

