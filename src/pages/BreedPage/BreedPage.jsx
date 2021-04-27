import { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import DogCard from "../../components/DogCard/DogCard";
import DogModel from "../../models/DogModel";
import { useParams } from 'react-router';
import axios from 'axios';
import MasonaryLayout from "../../components/MasonaryLayout/MasonaryLayout";

function BreedPage() {
    let dogCards = null;
    
    const [showModal, setShowModal] = useState(false);
    const [imageModal, setImageModal] = useState('');
    const [dogs, setDogs] = useState(null);

    const {breed} = useParams();
    const cardTitle = breed.charAt(0).toUpperCase() + breed.slice(1);

    useEffect(() => {
        let url = "https://dog.ceo/api/breed/"+ breed +"/images";
        axios.get(url).then(response => {
            let images = response.data.message;
            setDogs(images.map(image => new DogModel('', image)));
      }).catch(error => {
          console.error(error);
      });

    }, []);
  
    if(dogs){
        dogCards = dogs.map(dog => <DogCard key={dog.image} text={dog.breed} img={dog.image} showModal={onShowModal}></DogCard>)
    }

    function onShowModal(image) {
        setShowModal(true);
        setImageModal(image);
    }
    
    return (
        <div className="GalleryPage">
            <Container>
                <Row className="justify-content-between my-3">
                    <Col className="col-auto">
                        <h1>{cardTitle}</h1>
                    </Col>                    
                </Row>

                {dogs ? <MasonaryLayout list={dogCards}/> : null}

                <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}>
                    <Modal.Body>
                        <img src={imageModal} alt="dog" width="100%"/>
                    </Modal.Body>
                </Modal>
                
            </Container>
        </div>
    );
}

export default BreedPage;
  