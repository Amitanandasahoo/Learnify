import React from "react";
import './About.css';
import { assets } from "../../assets/assets";

const About = () =>{
    return(
        <>
        <div className="About" id="about">
            <div className="About-left">
                <img src={assets.about} alt="" className="about-img"/>
                <img src={assets.play} alt="" className="play-icon"/>
            </div>
            <div className="About-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embark on a transformatiove educational journy with our university's
                    comprehensive education progeams . Our cutting-edge curriculum is design to
                    empowe students whith the knowledge, skills, and experiences needed to excel 
                    in the dynamic field of education.
                </p>
                <p>
                    With a foucs on invitation , hands-on learning, and personalized mentership,
                    our program prepare aspiring educators to make a meaningful impact in classrooms, 
                    schools, and communities
                </p>
                <p>
                    Weather you aspire to become a teacher , administaror, counseler , 
                    or educational leader  , our diverse range of proframs offers the perfect
                    pathway to achieve your goles and unlock your full potential in shining the futute of education.
                </p>
            </div>
        </div>
        </>
    )
}

export default About;