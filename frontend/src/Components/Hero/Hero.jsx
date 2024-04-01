import React from 'react';
import './Hero.css';
import hero_image from '../Assets/hero_image.png'

const Hero = () => {

    const handleClickScroll = () => {
        const element = document.getElementById('new-collection');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='hero'>
            <div className="hero-left">
                <div className="title">Waterbury Traditional GMT</div>
                <div className="subtitle">There are Time<br />Travelers Among <br />Us</div>
                <div className="description">We’ve blended our traditional craftsmanship<br />with the practicality of a GMT movement</div>
                <br />
                <div>
                    <button className="latest-collection-button" onClick={handleClickScroll}>Latest Collection</button>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    );
}

export default Hero;
