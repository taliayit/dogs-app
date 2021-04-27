import React from 'react';
import { Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import GalleryPage from '../../pages/GalleryPage/GalleryPage';
import BreedPage from '../../pages/BreedPage/BreedPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MainContainer(props) {
    const [breeds, setBreeds] = useState(null);
    
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/list/all").then(response => {
            setBreeds(Object.keys(response.data.message));
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div className="MainContainer">
            <Navbar bg="light">
                <Navbar.Brand href="#">Dog Book</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#dogs">Breeds</Nav.Link>
                    <Nav.Link href="">About</Nav.Link>
                </Nav>
            </Navbar>
            <Route exact path="/dogs">{breeds ? <GalleryPage breeds={breeds}/> : null}</Route>
            <Route exact path="/dogs/:breed"><BreedPage/></Route>
        </div>
    );
}

export default MainContainer;
  