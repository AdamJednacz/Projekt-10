import React from 'react';
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = () => {
    return (
        <section className="service">
            <div className="container">
                <h1>Service</h1>
                <div className="service_items">
                    <div className="service_item">
                        <div className="service_item_content">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minus.</p>
                            <FontAwesomeIcon className="service_item_icon" icon={faAnglesDown}/>
                        </div>
                        <div className="service_item_more">
                            <ul className="service_item_more_list">
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>


                    <div className="service_item">
                        <div className="service_item_content">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minus.</p>
                            <FontAwesomeIcon className="service_item_icon" icon={faAnglesDown}/>
                        </div>
                        <div className="service_item_more">
                            <ul className="service_item_more_list">
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>


                    <div className="service_item">
                        <div className="service_item_content">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minus.</p>
                            <FontAwesomeIcon className="service_item_icon" icon={faAnglesDown}/>
                        </div>
                        <div className="service_item_more">
                            <ul className="service_item_more_list">
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                                <li className="service_item_more_list_item">Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
