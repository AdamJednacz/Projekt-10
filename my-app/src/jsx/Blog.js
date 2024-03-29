import React, { useState } from 'react';
import blog_1 from "../assets/blog_1.jpg";
import blog_2 from "../assets/blog_2.jpg";
import blog_3 from "../assets/blog_3.jpg";
import blog_bg from "../assets/blog_bg.jpg";

const Blog = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const style = {
        backgroundImage: `url(${blog_bg})`,
        backgroundSize: "cover"
    };

    return (
        <section style={style} className="blog">
            <div className="container">
                <h1>BLOG</h1>
                <div className="blog_items">
                    <div className={`blog_item ${activeIndex === 0 ? 'active' : ''}`}>
                        <div className={`blog_item_content ${activeIndex === 0 ? 'reverse' : ''}`}>
                            <div className="wrapper">
                                <img className={`banner-image ${activeIndex === 0? 'none' : ""}`} src={activeIndex === 0 ? "" : blog_1} alt={activeIndex === 0 ? "" : "blog_1"} />
                                <h2> Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit.<br />
                                    Lorem ipsum dolor sit amet,</p>
                                <ul className={activeIndex === 0 ? "block" : "none"}>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                                <button onClick={() => handleClick(0)} className="btn">{activeIndex === 0 ? "LESS" : "MORE"}</button>
                        </div>
                    </div>
                    <div className={`blog_item ${activeIndex === 1 ? 'active' : ''}`}>
                        <div className={`blog_item_content ${activeIndex === 1 ? 'reverse' : ''}`}>
                            <div className="wrapper">
                                <img className={`banner-image ${activeIndex === 1? 'none' : ""}`} src={activeIndex === 1 ? "" : blog_2} alt={activeIndex === 1 ? "" : "blog_2"} />
                                <h2> Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit.<br />
                                    Lorem ipsum dolor sit amet,</p>
                                <ul className={activeIndex === 1 ? "block" : "none"}>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                                <button onClick={() => handleClick(1)} className="btn btn2">{activeIndex === 1 ? "LESS" : "MORE"}</button>
                        </div>
                    </div>
                    <div className={`blog_item ${activeIndex === 2 ? 'active' : ''}`}>
                        <div className={`blog_item_content ${activeIndex === 2 ? 'reverse' : ''}`}>
                            <div className="wrapper">
                                <img className={`banner-image ${activeIndex === 2? 'none' : ""}`} src={activeIndex === 2 ? "" : blog_3} alt={activeIndex === 2 ? "" : "blog_3"} />
                                <h2> Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit.<br />
                                    Lorem ipsum dolor sit amet,</p>
                                <ul className={activeIndex === 2 ? "block" : "none"}>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                                <button onClick={() => handleClick(2)} className="btn">{activeIndex === 2 ? "LESS" : "MORE"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
