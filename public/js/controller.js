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

    addAlbumCard.querySelector("#submit").addEventListener('click', async () => {
        let albumName = addAlbumCard.querySelector("#album_name").value;
        let featuredPhotoId = addAlbumCard.querySelector("#featured_photo").value;

        if (albumName && featuredPhotoId) {
            try {
                let newAlbumID = await albumsModel.create({ name: albumName, featured_photo_id: featuredPhotoId });

                let newAlbum = await albumsModel.get(newAlbumID);     
                let newAlbumCard = document.createElement("li");
                newAlbumCard.innerHTML = `
                    <a href="?action=view_album&id=${newAlbumID}">
                        <img src="${newAlbum.featured_photo_filepath}" alt="${newAlbum.name}" />
                        <p>${newAlbum.name}</p>
                    </a>
                `;
                document.querySelector('#gallery').insertBefore(newAlbumCard, addAlbumCard);
                addAlbumCard.innerHTML = addAlbumCardHTML;
            } catch (error) {
                alert("Une erreur est survenue durant la création de l'album.");
            }
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

