import React from 'react';
import '../styles/Header.css'



const Header = () => {
    return ( 
    <div>
       
        
        <div className="top">
            <div className="logo">
                JW
            </div>
            <nav className="header">
                <ul>
                    <li>Main</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
        <div className="main_content">
            
            <h1>Hi, I'm a Front-end & Back-end developer</h1>
            <h2>I like when things on a website moves!</h2>
            <img src="" alt="" />
        </div>
       
        
        
    </div> );
}
 
export default Header;