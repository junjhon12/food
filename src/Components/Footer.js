import React from 'react'
import Logo from "../Assets/logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedIn } from "react-icons/si";
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src= {Logo} alt="" />
            </div>
            <div className="footer-icons">
                <BsTwitter/>
                <SiLinkedIn/>
                <BsYoutube/>
                <FaFacebookF/>
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>244-5333-7788</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  );
};

export default Footer;