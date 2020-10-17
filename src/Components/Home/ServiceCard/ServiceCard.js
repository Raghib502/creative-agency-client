import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    return (
        <div>
            <Link to='/order'> 
            <Card className="mr-3" style={{ width: '16rem' }}>
                <Card.Img variant="top" className="s-image" src={service.img} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                       {service.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </div>
    );
};

export default ServiceCard;