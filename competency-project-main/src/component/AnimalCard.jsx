import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AnimalCard = ({ name, image, description, price }) => {

    return (
        <Card style={{ width: '17rem' }} className="m-4">
            <Card.Img variant="top" className="card-image" src={image} fluid='true' />
            <Card.Body className="text-center">
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <div className="text-success">{price}</div>
                    <Button className="buyNowBtn" variant="success" 
                    disabled={false} onClick={(e) => {
                        console.log('e.target', e.target)
                        e.target.disabled = true;
                    }}
                    >Buy Now !</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default AnimalCard;