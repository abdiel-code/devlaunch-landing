import React from 'react';
import { Link } from 'react-scroll';
import heroImage from '../../assets/Hero.jpg';

const Hero = () => {
    return (
    <section className='hero' id='Hero'>
        <div className='hero-content'>
            <h1>Web development that boosts your business</h1>
            <p>Empowering your ideas with cutting-edge React and Node.js solutions.</p>            
            <Link
                to='Form'
                smooth={true}
                duration={500}
                className='cta-button'
            >
                Quote your project!
            </Link>
        </div>
        <div className='hero-image'>
            <img src={heroImage} alt="A computer with programming image" />
        </div>
    </section>
    );
}

export default Hero;