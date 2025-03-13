import React from "react";
import './Footer.css';
import { assets } from "../../assets/assets";

const Footer = () =>{
    return(
        <>
        <div className="Footer container">
            <p>© 2024 Learnify. All Rights reserved.</p>
            <ul>
                <li>Terms and Services</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        </>
    )
}

export default Footer;