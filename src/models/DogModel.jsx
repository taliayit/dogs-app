import axios from "axios";

class DogModel {
    constructor(breed, image) {
        this.breed = breed;
        this.image = image;
    }

    updateImage() {
        let url = "https://dog.ceo/api/breed/" + this.breed + "/images/random";
        axios.get(url).then(response => {
            this.image = response.data.message;
        }).catch(err => {
            console.error(err);
        });
    }
}

export default DogModel;
  