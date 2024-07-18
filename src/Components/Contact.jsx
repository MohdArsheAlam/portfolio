import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Contact() {
    return (
        <div className="container contact" id="contact">
            <h1>CONTACT ME</h1>
            <div className="contact-icon">
                <a href="https://www.instagram.com" target="-blank" className="items">
                    <FaSquareInstagram className="icons" />
                </a>
                <a href="https://www.faceboook.com" target="-blank" className="items">
                    <CiFacebook className="icons" />
                </a>
                <a href="https://www.linkedin.com/in/mohd-arsh-e-alam-113136215/" className="items">
                    <CiLinkedin className="icons" />
                </a>
                <a href="https://www.twitter.com" target="-blank" className="items">
                    <FaSquareXTwitter className="icons" />
                </a>
                <a href="https://www.github.com" target="-blank" className="items">
                    <FaSquareGithub className="icons" />
                </a>
                <a href="mailto:mohdarshmzn@gmail.com" target="-blank" className="items">
                    <SiGmail className="icons" />
                </a>
            </div>
        </div>
    );
}
