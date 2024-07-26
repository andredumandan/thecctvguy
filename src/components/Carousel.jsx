import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
    return (
        <div className='carousel'>
            <h1 id='herotext'>
                BE SAFE, BE SECURED,<br/>
                <span id='cctvguy'> BE A CCTV GUY</span>
            </h1>
            <div id='overlay'/>
            <img id="carouselimg" src='../../public/carousel.jpg'/>
        </div>
    );
};

export default Carousel;