import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import DogCard from "../../components/DogCard/DogCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import MasonaryLayout from "../../components/MasonaryLayout/MasonaryLayout";
import DogModel from "../../models/DogModel";

function GalleryPage({breeds}) {
    let dogCards;
    const [dogs, setDogs] = useState(null);
    const [input, setInput] = useState('');


    useEffect(() => {
        if(breeds)
            setDogs(breeds.map(breed => new DogModel(breed, '')));
    }, []);
    

    if(dogs){
        const filtered = dogs.filter(dog => {
            return (dog.breed.toLowerCase().includes(input.toLowerCase()));
        });
        dogCards = filtered.map(dog => <DogCard key={dog.breed} text={dog.breed} img={dog.image}></DogCard>)
    }

    const updateInput = (input) => {
        setInput(input);
    }
    
    function updateImages() {
        setDogs(dogs.map(dog => {
            dog.updateImage();
            return dog;
        }));
    }

    return (
        <div className="GalleryPage">
            <Container>
                <Row className="justify-content-between my-3">
                    <Col className="col-auto me-auto">
                        <SearchBox placeholder="Search Breed . . ." input={input} onInputChange={updateInput}/>
                    </Col>                    
                    <Col className="col-auto">
                        <Button variant="secondary" onClick={updateImages}>Update Image</Button>
                    </Col>
                </Row>

                {dogs ? <MasonaryLayout list={dogCards}/> : null}

            </Container>
        </div>
    );
}

export default GalleryPage;
  