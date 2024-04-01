import React, { useEffect, useRef } from 'react';

import suprabg1 from "../assets/supra_bg.webp";
import suprabg2 from "../assets/supra_bg2.jpg";

import supra3D from "../assets/supra_3.png";
import useEffect_MoveX from "./useEffect_MoveX";
import arrow from "../assets/arrow down.webp";

const About = () => {
    const style = {
        backgroundImage: `url(${suprabg2})`,
        backgroundSize: "cover"
    };
    const section = useRef(null);
    const item = useRef(null);
    const item3 = useRef(null);

    useEffect_MoveX(section,item,item3)

    return (
        <section ref={section}  style={style} className="about">
            <div className="container">
                <div className="about_items">
                    <div ref={item}  className="about_item">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                    <div   className="about_item">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                    <div ref={item3} className="about_item">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>
                <img className="about_arrow" src={arrow} alt={arrow}/>
            </div>
        </section>
    );
};

export default About;
