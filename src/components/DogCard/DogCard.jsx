import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Redirect } from 'react-router';

function DogCard({text, img, showModal}) {
    const [redirectTo, setRedirectTo] = useState();
    const [image, setImage] = useState('https://www.austinpetsalive.org/assets/placeholder/dog-placeholder-tall.svg');

    useEffect(() => {
        if(img === '') {
            let url = "https://dog.ceo/api/breed/" + text + "/images/random";
            axios.get(url).then(response => {
                setImage(response.data.message);
            }).catch(err => {
                console.error(err);
            });
        }
        else {
            setImage(img);
        }
    }, [img]);

    if (redirectTo !== undefined) {
        return <Redirect to={'/dogs/' + redirectTo}/>
    }

    function handleClick() {
        if(text !== '') {
            setRedirectTo(text);
        }
        else {
            showModal(image);
        }
    }

    return (
        <Card onClick={handleClick} className="p-2" style={{width: "100%", display: "block"}}>
            {text !== '' ? <Card.Text>{text}</Card.Text> : null}
            <Card.Img src={image} alt="dog"></Card.Img>
        </Card>
    );
}

export default DogCard;
  