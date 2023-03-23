import  { useEffect, useState, useRef } from "react";
import './Navbar.css';
import React from "react";


export default function Navbar(){
    

    const [backgroundEffectPartern, setBackgroundEffectPartern] = useState("0% 0%");
    const [backgroundEffectPhoto, setBackgroundEffectPhoto] = useState("center 40%");
    
    const partern = useRef();
    const photo = useRef();


    function handleHover (position1, position2){
        setBackgroundEffectPartern(position1);
        setBackgroundEffectPhoto(position2);

    }

    useEffect(() => {
        photo.current.style.backgroundPosition = backgroundEffectPhoto;
        photo.current.style.transition = "background-position 800ms ease, opacity 400ms ease, background-size 500ms ease";
        partern.current.style.backgroundPosition= backgroundEffectPartern;
        partern.current.style.transition = "background-position 800ms ease, background-size 700ms ease";
    },[backgroundEffectPartern, backgroundEffectPhoto]);


    
    return(
  <div style={{backgroundColor:"#88a693"}}>


       
        
            <div  id="menu" initial={{width: "0%"}}
                                    animate={{width: "100%"}}
                                    exit={{width: "100%", transition:"5000ms"}}>
                <div id="menu-items" >
                    <a href="/" className="menu-item" onMouseOver={() => handleHover("0% -25%", "center 45%")}>Home</a>
                    <a href="/Menu" className="menu-item" onMouseOver={() => handleHover("0% -50%", "center 50%")}>Menu</a>
                    <a href="/About" className="menu-item" onMouseOver={() => handleHover("0% -75%", "center 55%")}>About</a>
                    <a href="/Contact" className="menu-item" onMouseOver={() => handleHover("0% -100%", "center 60%")}>Contact us</a>
                </div>
                <div id= "menu-background-parttern" ref={partern} ></div>
                <div id= "photo" ref={photo}></div>
                <div id="cover"></div>
            </div>
        
        
    </div> );
}