import React from 'react';
import mainbg from "../assets/Main.webp"
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import arrow from "../assets/arrow down.webp"
const Main = () => {



    return (
        <section className="main">
            <div className="container">

                <h1>Car Sharing</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minus.</p>
                <div className="main_btns">
                    <button className="main_btn">See more</button>
                </div>
                <img className="main_arrow" src={arrow} alt={arrow}/>
            </div>
        </section>
    );
};

export default Main;