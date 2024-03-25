import React from 'react';
import blog_1 from "../assets/blog_1.jpg"
import blog_2 from "../assets/blog_2.jpg"
import blog_3 from "../assets/blog_3.jpg"
import blog_bg from "../assets/blog_bg.jpg"
const Blog = () => {
    const style = {
        backgroundImage: `url(${blog_bg})`,
        backgroundSize: "cover"
    }
    return (
        <section style={style} className="blog">
            <div className="container">
                <h1>BLOG</h1>
                <div className="blog_items">
                    <div className="blog_item">
                        <div className="wrapper">
                            <img className="banner-image" src={blog_1} alt={blog_1}/>
                            <h2> Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, <br/>
                                consectetur adipiscing elit.</p>
                        </div>
                        <div className="button-wrapper">
                            <button className="btn ">MORE</button>
                        </div>
                    </div>

                    <div className="blog_item">
                        <div className="wrapper">
                            <img className="banner-image" src={blog_2} alt={blog_2}/>
                            <h2> Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, <br/>
                                consectetur adipiscing elit.</p>
                        </div>
                        <div className="button-wrapper">
                            <button className="btn o">MORE</button>

                        </div>
                    </div>
                    <div className="blog_item">
                        <div className="wrapper">
                            <img className="banner-image" src={blog_3} alt={blog_3}/>
                            <h2> Lorem ipsum </h2>
                            <p>Lorem ipsum dolor sit amet, <br/>
                                consectetur adipiscing elit.</p>
                        </div>
                        <div className="button-wrapper">
                            <button className="btn">MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;