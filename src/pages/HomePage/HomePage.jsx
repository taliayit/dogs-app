import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
        <div className="HomePage">
            <Container className="text-left p-5" fluid>
                <h1>Dog Book</h1>
                <p>Man's Best Friend</p>
                <Link className="btn btn-secondary" to="/dogs">Woof!</Link>
            </Container>
        </div>
    );
}

export default HomePage;
  