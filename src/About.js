import React, { useState } from "react";
import './About.css';
import imageAbout1 from './images/imageAbout1.jpg';
import imageAbout2 from './images/imageAbout2.jpg';
import imageAbout3 from './images/imageAbout3.jpg';
import imageAbout4 from './images/imageAbout4.jpg';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import MenuButton from "./MenuButton";
import Aos from 'aos';
import "aos/dist/aos.css"
import welcome from './images/welcome.jpg';
import {useRef, useEffect} from 'react';




export default function About() {
   

function rand(){
    return ((Math.floor((Math.random() * 15) + 5))*100).toString();
}


useEffect(() => {

    Aos.init({ disable:"mobile" , easing: "linear"})  ;

});



    return(
    <>
    <MenuButton/>
    <div id="about">
    <div id="aboutBackground"></div>
    <div className="introSection">
        
                
                <h2 id="intro">Vietnamese Values in Toronto </h2>
        </div>
        <div className="introSection">
                <p id="introContent">Located in Corso Italia since 2007, Pho Rang Dong has offered countless comfort and value
                    meals to numerous people of Toronto.
                    Since opening, Chef Khac Giang Nguyen and his wife has always wanted to introduce the colorful flavors of northen Vietnam classics,
                    such as Bun Cha Hanoi Pho, Cha Gio, using local ingredients. 
                    Their core value is to provide meals that are tasty and hearty, which has fulfilled expectations of many decades-long patrons.
                </p>
            
        </div>



        
            <div className="photoGrid" >
                <div className="cardWide"  data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${imageAbout1})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="card" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${image3})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="card" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${image2})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="card" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${image5})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="card" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${image6})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="cardWide" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${imageAbout3})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="card" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${imageAbout4})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="cardTall" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${imageAbout2})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="card" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${image4})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="card" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${image8})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="card" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${image9})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="card" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${image1})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="card" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${image7})`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="cardWide" data-aos="fade-up" data-aos-duration={rand()} style={{ background: `url(${welcome})`,backgroundSize:"cover", backgroundPosition:"top"}}></div>
            </div>
    </div>  
    </>        
    )


}