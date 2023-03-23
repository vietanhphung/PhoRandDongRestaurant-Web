import MenuCard from "./MenuCard";
import React, { useEffect, useRef, useState } from "react";

import CarouselCustom from "./Carousel";




function Menu(){
    const buttonToTop = useRef();
    const [fromTop,setFromTop] = useState(0);
    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        if (fromTop>700 && scrolled) { buttonToTop.current.className="toTopButton-visible";}
        else {buttonToTop.current.className="toTopButton-hidden"}
        
    });
        
    window.addEventListener('scroll',()=>{
       setFromTop(document.documentElement.scrollTop);
       setScrolled(true);

    }
    )

    return (

    <div >

    <div id="menuPage" >
    <a ref={buttonToTop} id="toTopButton" className="toTopButton-hidden" href="#top">Category</a>

        <h1 >Menu </h1> 
        <p id="instruct">click on a category to see more details</p>
    <a id="top"></a>

        <MenuCard />

    </div>
        </div>
    )
}


export default Menu;