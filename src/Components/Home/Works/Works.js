import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import './Works.css';

const Works = () => {
    return (
        <div style={{backgroundColor: '#111430' , marginTop:'50px'}}>
             <h1 className="text-white text">Here are some of <span style={{ color: '#7AB259' }}>our works</span></h1>
            <Carousel className="work">
                <Carousel.Item>
                    <img
                        src={carousel}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={carousel2}
                    alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={carousel3}
                    alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={carousel4}
                    alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    // className="d-block w-100"
                    src={carousel5}
                    alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Works;