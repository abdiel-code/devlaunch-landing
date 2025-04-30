import React from 'react';
import heroImage from '../../assets/Hero.jpg';

const Hero = () => {
    return (
    <section className='hero'>
        <div className='hero-content'>
            <h1>Web development that boosts your business</h1>
            <p>Custom solutions with React and Node.js</p>
            <button className='cta-button'>Quote your project!</button>
        </div>
        <div className='hero-image'>
            <img src={heroImage} alt="A computer with programming image" />
        </div>
    </section>
    );
}

export default Hero;