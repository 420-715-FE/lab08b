class PhotosModel {
    constructor($baseUrl) {
        this.baseUrl = $baseUrl;
    }

    async getAll() {
        const response = await fetch(`${this.baseUrl}photos`);
        if (!response.ok) {
            throw new Error(`Error while fetching photos: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }
}

export default PhotosModel;
