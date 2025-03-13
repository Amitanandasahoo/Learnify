import React, { useRef } from "react";
import "./Testimonials.css";
import { assets } from "../../assets/assets";

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <>
      <div className="Testimonials" id="testimonials">
        <img src={assets.next} alt="" className="next-btn" onClick={slideForward}/>
        <img src={assets.back_icon} alt="" className="back-btn" onClick={slideBackward}/>
        <div className="slider container">

          <ul ref={slider}>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={assets.user_1} alt="" />
                  <div>
                    <h3>William Jackson 1</h3>
                    <span>Learnify , USA</span>
                  </div>
                </div>
                <p>
                  Choosing to purse my degree at Learnify was one of the best
                  dession i have ever made. The suppotive Cpmmunities ,
                  State-of-the-art facilities and commitment to academic
                  excelence have truly excuted my expectations.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={assets.user_2} alt="" />
                  <div>
                    <h3>William Jackson 2</h3>
                    <span>Learnify , USA</span>
                  </div>
                </div>
                <p>
                  Choosing to purse my degree at Learnify was one of the best
                  dession i have ever made. The suppotive Cpmmunities ,
                  State-of-the-art facilities and commitment to academic
                  excelence have truly excuted my expectations.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={assets.user_3} alt="" />
                  <div>
                    <h3>William Jackson 3</h3>
                    <span>Learnify , USA</span>
                  </div>
                </div>
                <p>
                  Choosing to purse my degree at Learnify was one of the best
                  dession i have ever made. The suppotive Cpmmunities ,
                  State-of-the-art facilities and commitment to academic
                  excelence have truly excuted my expectations.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={assets.user_4} alt="" />
                  <div>
                    <h3>William Jackson 4</h3>
                    <span>Learnify , USA</span>
                  </div>
                </div>
                <p>
                  Choosing to purse my degree at Learnify was one of the best
                  dession i have ever made. The suppotive Cpmmunities ,
                  State-of-the-art facilities and commitment to academic
                  excelence have truly excuted my expectations.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
