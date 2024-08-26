import React from "react";
import "./Leads.css";
import { SiLinkedin} from "react-icons/si"
import { SiInstagram} from "react-icons/si"
import {useRef} from 'react' ;
import next_icon from "../../assets/next_icon.png";
import back_icons from "../../assets/back_icon.png";
import user_1 from "../../assets/user_1.jpg";
// import user_2 from "../../assets/user_2.jpg";
// import user_3 from "../../assets/user_3.jpg";
// import user_4 from "../../assets/user_4.jpg";
// import user_5 from "../../assets/user_5.jpg";
// import user_6 from "../../assets/user_6.jpg";
// import user_7 from "../../assets/user_7.jpg";
// import user_8 from "../../assets/user_8.jpg";
// import user_9 from "../../assets/user_9.jpg";

export default function Leads() {
  const slider=useRef();
    let tx=0;
  const slideForward=()=>{
        
    if(tx>-150){
      tx-=33.33;
    }
    slider.current.style.transform=`translateX(${tx}%)`

  }
  const slideBackward=()=>{
    if(tx<0){
      tx+=33.33;
    }
    slider.current.style.transform=`translateX(${tx}%)`
  }
  
  

  return (
    <div className="Leads">
      <h2 className="leaders">EXECUTIVE BOARDS</h2>
      <img src={next_icon} alt="" className="next_btn" onClick={slideForward} />
      <img src={back_icons} alt="" className="back_btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div className="flex flex-wrap items-center justify-end gap-4">
                <div className=   "p-1 ">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                < SiLinkedin className="text-2xl text-green-500"/>
                </a>
            </div>
            <div className=" p-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                < SiInstagram className="text-2xl text-green-500 "/>
                </a>
            </div>
            </div>
                <div>
                  <h3><b>Sweta Padma Mahapatra</b></h3>
                  <span>
                    Convenor
                  </span>
                </div>
                
              </div>
              
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div className="flex flex-wrap items-center justify-end gap-4">
                <div className=   "p-1 ">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                < SiLinkedin className="text-2xl text-green-500"/>
                </a>
            </div>
            <div className=" p-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                < SiInstagram className="text-2xl text-green-500 "/>
                </a>
            </div>
            </div>
                <div>
                  <h3><b>Smruti Somyak Pradhan</b></h3>
                  <span>
                    Coordinator
                  </span>
                </div>
                
              </div>
              
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div className="flex flex-wrap items-center justify-end gap-4">
                <div className=   "p-1 ">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                < SiLinkedin className="text-2xl text-green-500"/>
                </a>
            </div>
            <div className=" p-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                < SiInstagram className="text-2xl text-green-500 "/>
                </a>
            </div>
            </div>
                <div>
                  <h3><b>J R Prasad</b></h3>
                  <span>
                    Coordinator
                  </span>
                </div>
                
              </div>
             
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div className="flex flex-wrap items-center justify-end gap-4">
                <div className=   "p-1 ">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                < SiLinkedin className="text-2xl text-green-500"/>
                </a>
            </div>
            <div className=" p-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                < SiInstagram className="text-2xl text-green-500 "/>
                </a>
            </div>
            </div>
                <div>
                  <h3><b>Sruti Nayak</b></h3>
                  <span>
                    Software Lead
                  </span>
                </div>
                
              </div>
              
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div className="flex flex-wrap items-center justify-end gap-4">
                <div className=   "p-1 ">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                < SiLinkedin className="text-2xl text-green-500"/>
                </a>
            </div>
            <div className=" p-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                < SiInstagram className="text-2xl text-green-500 "/>
                </a>
            </div>
            </div>
                <div>
                  <h3><b>Sarans Mishra</b></h3>
                  <span>
                    Software Lead
                  </span>
                </div>
                
              </div>
             
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div className="flex flex-wrap items-center justify-end gap-4">
                <div className=   "p-1 ">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                < SiLinkedin className="text-2xl text-green-500"/>
                </a>
            </div>
            <div className=" p-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                < SiInstagram className="text-2xl text-green-500 "/>
                </a>
            </div>
            </div>
                <div>
                  <h3><b>Debabrata Sahoo</b></h3>
                  <span>
                    Design Lead
                  </span>
                </div>
                
              </div>
             
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div className="flex flex-wrap items-center justify-end gap-4">
                <div className=   "p-1 ">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                < SiLinkedin className="text-2xl text-green-500"/>
                </a>
            </div>
            <div className=" p-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                < SiInstagram className="text-2xl text-green-500 "/>
                </a>
            </div>
            </div>
                <div>
                  <h3><b>Atrayee Jha</b></h3>
                  <span>
                    Hardware Lead
                  </span>
                </div>
                
              </div>
             
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div className="flex flex-wrap items-center justify-end gap-4">
                <div className=   "p-1 ">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                < SiLinkedin className="text-2xl text-green-500"/>
                </a>
            </div>
            <div className=" p-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                < SiInstagram className="text-2xl text-green-500 "/>
                </a>
            </div>
            </div>
                <div>
                  <h3><b>Mirza Matin Baig</b></h3>
                  <span>
                    External Affairs
                  </span>
                </div>
                
              </div>
              
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div className="flex flex-wrap items-center justify-end gap-4">
                <div className=   "p-1 ">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                < SiLinkedin className="text-2xl text-green-500"/>
                </a>
            </div>
            <div className=" p-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                < SiInstagram className="text-2xl text-green-500 "/>
                </a>
            </div>
            </div>
                <div>
                  <h3><b>Spandan Das</b></h3>
                  <span>
                    Public Relations
                  </span>
                </div>
                
              </div>
             
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
