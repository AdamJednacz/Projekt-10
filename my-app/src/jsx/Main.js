import React, {useEffect, useRef} from 'react';
import arrow from "../assets/arrow down.webp"
const Main = ({windowMainHeight}) => {






    return (
        <section  className="main">
            <div className="container">
                <h1>Car Sharing</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
                <p>Lorem ipsum dolor sit amet</p>
                <div className="main_btns">
                    <button className="main_btn">See more</button>
                </div>
                <img className="main_arrow" src={arrow} alt={arrow}/>
            </div>
        </section>
    );
};
export default Main;