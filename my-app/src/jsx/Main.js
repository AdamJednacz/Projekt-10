import React from 'react';
import mainbg from "../assets/Main.webp"
import Header from "./Header";
const Main = () => {

    const stlye = {
        backgroundImage: `url(${mainbg})`,
        backgroundSize: "cover"
    }

    return (
        <section style={stlye} className="main">
            <div className="container">

                <h1>Car Sharing</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minus.</p>
                <div className="main_btns">
                    <button className="main_btn">See more</button>
                </div>
            </div>
        </section>
    );
};

export default Main;