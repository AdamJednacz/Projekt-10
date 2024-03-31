import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Logo</h1>
                <ul className="header_menu">
                    <li className="header_menu_element">Home</li>
                    <li className="header_menu_element">About</li>
                    <li className="header_menu_element">Offer</li>
                    <li className="header_menu_element">Contact</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;