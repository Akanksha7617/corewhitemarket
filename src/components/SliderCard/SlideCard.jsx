import React, { useState, useEffect } from 'react';
import IMG from '../../Images/IMG.jpg';
import img2 from '../../Images/img2.jpg'; 



import '../SliderCard/Slidercard.css';

const Carousel = ()=>{

    const images = [IMG, img2 ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); 
        
        return () => clearInterval(interval);
    }, []); 

    return(
    <div className='bannerSection'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div className='box'>
                        <img src={images[currentImageIndex]} className='w-100 transition' alt={`Banner ${currentImageIndex + 1}`} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Carousel;