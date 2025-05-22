import AlbumsModels from './albumsModel.js';

let addAlbumCard = document.querySelector("#add_album");
let addAlbumCardHTML = addAlbumCard.innerHTML;

let onAddAlbumCardClick = () => {
    addAlbumCard.innerHTML = `
    <form>
        <label for="album_name">Nom de l'album</label>
        <input type="text" id="album_name" />
        <label for="featured_photo">Photo de couverture</label>
        <select id="featured_photo"></select>
        <input type="button" id="submit" value="Valider">
    </form>
    `;
    addAlbumCard.removeEventListener('click', onAddAlbumCardClick);
};

addAlbumCard.addEventListener('click', onAddAlbumCardClick);