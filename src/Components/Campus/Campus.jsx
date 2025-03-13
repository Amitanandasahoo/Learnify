import React from "react";
import './Campus.css';
import { assets } from "../../assets/assets";


const Campus = () =>{
    return(
        <>
        <div className="Campus" id="campus">
            <div className="gallery">
                <img src={assets.gallery_1} alt="" />
                <img src={assets.gallery_2} alt="" />
                <img src={assets.gallery_3} alt="" />
                <img src={assets.gallery_4} alt="" />
            </div>
            <button className="btn galler-btn">See More<img src={assets.white_arrow} alt="" /></button>
        </div>
        </>
    )
}

export default Campus;