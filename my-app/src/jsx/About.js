import React, { useEffect, useRef } from 'react';

import suprabg1 from "../assets/supra_bg.webp";
import suprabg2 from "../assets/supra_bg2.jpg";

import supra3D from "../assets/supra_3.png";

const About = () => {
    const style = {
        backgroundImage: `url(${suprabg2})`,
        backgroundSize: "cover"
    };
    const section = useRef(null);
    const item = useRef(null);

    useEffect(() => {
        const sectionElement = section.current;
        const handleScroll = () => {
            const elements = item.current;
            const height = sectionElement.offsetHeight;
            if (window.scrollY > (height - 200)) {
                elements.classList.add("moveX");
                elements.classList.add("show");
            } else {
                elements.classList.remove("moveX");
                elements.classList.remove("show");
            }
        }

        window.addEventListener('scroll', handleScroll); // Dodaj listener do zdarzenia scroll

        return () => {
            window.removeEventListener('scroll', handleScroll); // Usuń listener zdarzenia po zakończeniu komponentu
        };
    }, []);


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
                    <div  className="about_item">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
