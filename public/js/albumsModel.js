class AlbumsModel {
    constructor($baseUrl) {
        this.baseUrl = $baseUrl;
    }

    async getAll() {
        const response = await fetch(`${this.baseUrl}albums`);
        if (!response.ok) {
            throw new Error(`Error while fetching albums: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }

    async get(id) {

    }

    async create(album) {

    }

    async update(id, album) {

    }

    async delete(id) {

    }

    async getPhotos(id) {

    }

    async addPhotos(id, photoIDs) {

    }

    async removePhoto(id, photoID) {

    }
}

export default AlbumsModel;
