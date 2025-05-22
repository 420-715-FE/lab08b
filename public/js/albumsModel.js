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
        const response = await fetch(`${this.baseUrl}albums/${id}`);
        if (!response.ok) {
            throw new Error(`Error while fetching album: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }

    async create(album) {
        const response = await fetch(`${this.baseUrl}albums`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(album)
        });
        if (!response.ok) {
            throw new Error(`Error while creating album: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data['id'];
    }

    async update(id, album) {
        const response = await fetch(`${this.baseUrl}albums/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(album)
        });
        if (!response.ok) {
            throw new Error(`Error while updating album: ${response.status} ${response.statusText}`);
        }
    }

    async delete(id) {
        const response = await fetch(`${this.baseUrl}albums/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`Error while deleting album: ${response.status} ${response.statusText}`);
        }
    }

    async getPhotos(id) {
        const response = await fetch(`${this.baseUrl}albums/${id}photos`);
        if (!response.ok) {
            throw new Error(`Error while fetching album photos: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }

    async addPhotos(id, photoIDs) {
        const response = await fetch(`${this.baseUrl}albums/${id}/photos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(photoIDs)
        });
        if (!response.ok) {
            throw new Error(`Error while adding photos to album: ${response.status} ${response.statusText}`);
        }
    }

    async removePhoto(id, photoID) {
        const response = await fetch(`${this.baseUrl}albums/${id}/photos/${photoID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error while removing photos from album: ${response.status} ${response.statusText}`);
        }
    }
}

export default AlbumsModel;
