import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

export const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
                Food is An Important Part Of A Balanced Diet
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus amet assumenda beatae laudantium, eaque omnis modi molestias numquam architecto!
            </p>
            <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, fugiat.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn More</button>
                <button className='watch-video-button'> <BsFillPlayCircleFill/> Watch video</button>
            </div>
        </div>
    </div>
  )
}

export default About