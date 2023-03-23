import React from "react";
import "./Main3.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax/dist/react-spring-parallax.cjs";
import {useEffect, useState, useRef} from "react";
import MenuButton from "./MenuButton";
import Footer from "./Footer";
import {HiChevronDoubleDown} from "react-icons/hi";
import CarouselCustom from "./Carousel";



function Main3(){

    const ref = useRef(null);
      


    return(
        <>    
        
        <Parallax pages = {4} id="main3">
        

            <ParallaxLayer factor={1}>
                <ParallaxLayer offset={0}><MenuButton/>  </ParallaxLayer>
                <ParallaxLayer offset={2}><div id="spinPlate"></div></ParallaxLayer>

                

                <ParallaxLayer speed={0.8} offset={0.45} ><div id="background3"></div></ParallaxLayer>
                <ParallaxLayer speed={0} offset={0.2} ><h1 id="titleBackground">&nbsp;Pho <br/>&nbsp;&nbsp; Rang <br/> Dong</h1></ParallaxLayer>
                <ParallaxLayer speed={.5} offset={0.35}> <div id="photoBackground" ></div></ParallaxLayer>
                <ParallaxLayer speed={-.03} offset={0.21}><div id="photoMain3" ></div></ParallaxLayer>
                <ParallaxLayer speed={-.05}  offset={0.2}  ><h1 id="title">&nbsp;Pho <br/>&nbsp;&nbsp; Rang <br/> Dong</h1></ParallaxLayer>
                <ParallaxLayer offset={.9}><div style={{display:"flex", justifyContent:"center"}}><a id="buttonToSection" href="#section1"><HiChevronDoubleDown/></a></div></ParallaxLayer>
            </ParallaxLayer>
      
            <ParallaxLayer offset={1} factor={3} >
                <section id= "container">
                <div id="parternBackground"></div>
                    <a id="section1"></a>
                        <div id="textMain3">
                            <h3>Rang dong</h3>
                            <p>(noun) dawn, the time that marks the beginning of twilight before sunrise <br/>
                            (it's the beginning of a new day, representation of hope and happiness) </p>
                        </div>
                        <div id="photoStack">
                            <div id=""></div>
                            <div id="ownerPhoto"></div>
                            <div id="foodPhoto"></div>
                        </div>
                    <div id="cloud1" className="cloud"></div>
                    <div id="cloud2" className="cloud"></div>
                    <div id="cloud3" className="cloud"></div>
                </section>
                <section >
                    <CarouselCustom/>
                </section>
                <Footer/>

            </ParallaxLayer>
        </Parallax>
        
    </>
    )
}

export default Main3;