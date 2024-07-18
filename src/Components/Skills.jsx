import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import mongodb from "../assets/mongodb.png"

export default function Skills() {
    return (
        <>
            <div className="container skills" id="skills">
                <h1>SKILLS</h1>
                <div className="items">
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                        <img src={html} alt="HTML" />
                        <h3>HTML</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                        <img src={css} alt="CSS" />
                        <h3>CSS</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                        <img src={javascript} alt="JavaScript" />
                        <h3>JAVASCRIPT</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                        <img src={react} alt="React" />
                        <h3>REACT</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                        <img src={node} alt="Node" />
                        <h3>NODE</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                        <img src={mongodb} alt="MongoDB" />
                        <h3>MONGODB</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

