import React from "react";
import './Programs.css';
import { assets } from "../../assets/assets";

const Progarms = () =>{
    return(
        <>
        <div className="progarms" id="programs">
            <div className="program">
                <img src={assets.program_1}alt="" />
                <div className="caption">
                    <img src={assets.program_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={assets.program_2}alt="" />
                <div className="caption">
                    <img src={assets.program_icon_2} alt="" />
                    <p>Master Degree</p>

                </div>
            </div>
            <div className="program">
                <img src={assets.program_3}alt="" />
                <div className="caption">
                    <img src={assets.program_icon_3} alt="" />
                    <p>PhD Degree</p>

                </div>
            </div>
        </div>
        </>
    )
}

export default Progarms