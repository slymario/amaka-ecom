import React from 'react';
import './Hero.css';
import hand_iconn from '../Assets/hand_iconn.png'
import hero_image from '../Assets/hero_image.png'
import { FaArrowRight } from "react-icons/fa";
// import arrow_icon from '../Assets/arrow_icon.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_iconn} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest collection</div>
                <FaArrowRight />
            </div>
        </div>

        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero