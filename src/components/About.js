import React from 'react';
import "../styles/About.css";
import mainImage from "../images/main.jpg";

const About = () => {
    return (
        <div className='about-container'>
            <div className="wrap">
                <div className="image-container">
                    <img src={mainImage} alt="main" className="image" />
                </div>
                <div className="div1">
                    <button className='translate'>TÜRKÇEYE GEÇ</button>
                    <h1 className='about-h1'>sinan</h1>
                    <div className='about-main'>
                        <div className='about-main-h1'>I am a Frontend Developer...</div>
                        <div className='about-content'>...who likes to craft solid and scalable frontend products with great user experiences.</div>
                        <div className='about-links'>
                            <button className='github-button'>Github</button>
                            <button className='linkedin-button'>Linkedin</button>
                        </div>
                    </div>
                </div>
                <div className="div2">
                    
                </div>
            </div>
        </div>
    );
};

export default About;
