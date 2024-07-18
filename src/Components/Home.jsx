import React, { useRef, useEffect } from 'react';
import pdf from '../pdf/Resume.pdf.docx';
import pic from '../assets/pic.jpg.jpg';
import Typed from 'typed.js';

export default function Home() {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Welcome To My Profile", "My Name is ArsheAlam", "I'm a Front-End Developer"],
            typeSpeed: 70,
            backSpeed: 70,
            loop: true
        };
        const typed = new Typed(typedRef.current, options);
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="container home" id="home">
            <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
                <h1 ref={typedRef}>Loading...</h1> {/* Initial content added */}
                <a href={pdf}
                    download="Resume.pdf.docx"
                    className="btn btn-outline-warning my-3">Download Resume</a>
            </div>
            <div className="right">
                <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
                    <img src={pic} alt="Profile" />
                </div>
            </div>
        </div>
    );
}
