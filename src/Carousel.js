import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import "./Carousel.css";

function CarouselCustom() {
  return (
    <div style={{width:"80%" ,height:"fit-content", marginLeft:"10%", marginTop:"100px", marginBottom:"200px"}}>
      <div style={{textAlign:"center", marginTop:"100px"}}><h1 id="bestSeller">Our best sellers</h1></div>

      <div id="carousel">
        <div className="column" id='column1'>
          <div id='c1r1'>
            <div><img src={require("./images/image1.jpg")}></img>
                  <div className="caption"><mark>Hot & Sour Soup</mark></div></div>
            <div><img src={require("./images/image2.jpg")}></img>
                  <div className="caption"><mark>Spring rolls</mark></div></div>
            <div><img src={require("./images/image3.jpg")}></img>
                  <div className="caption"><mark>Bun Cha Hanoi</mark></div></div>
            <div><img src={require("./images/image4.jpg")}></img>
                  <div className="caption"><mark>Fresh Rolls</mark></div></div>
          </div>
          <div id='c1r2'>
            <div><img src={require("./images/image1.jpg")}></img>
                  <div className="caption"><mark>Hot & Sour Soup</mark></div></div>
            <div><img src={require("./images/image2.jpg")}></img>
                  <div className="caption"><mark>Spring rolls</mark></div></div>
            <div><img src={require("./images/image3.jpg")}></img>
                  <div className="caption"><mark>Bun Cha Hanoi</mark></div></div>
            <div><img src={require("./images/image4.jpg")}></img>
                  <div className="caption"><mark>Fresh rolls</mark></div></div>
          </div>
        </div>


        <div className="column" id='column2'>
          <div id='c2r1'>
            <div><img src={require("./images/image6.jpg")}></img>
                  <div className="caption"><mark>Pork Chop</mark></div></div>
            <div><img src={require("./images/image8.jpg")}></img>
                  <div className="caption"><mark>Curry Chicken Pad Thai</mark></div></div>
            <div><img src={require("./images/image9.jpg")}></img>
                  <div className="caption"><mark>Fried Rice</mark></div></div>
            <div><img src={require("./images/image10.jpg")}></img>
                  <div className="caption"><mark>Stirfried Egg Noodle</mark></div></div>
          </div>
          <div id='c2r2'>
            <div><img src={require("./images/image6.jpg")}></img>
                  <div className="caption"><mark>Pork Chop</mark></div></div>
            <div><img src={require("./images/image8.jpg")}></img>
                  <div className="caption"><mark>Curry Chicken Pad Thai</mark></div></div>
            <div><img src={require("./images/image9.jpg")}></img>
                  <div className="caption"><mark>Fried Rice</mark></div></div>
            <div><img src={require("./images/image10.jpg")}></img>
                  <div className="caption"><mark>Stiredfried Egg Noodle</mark></div></div>
          </div>
        </div>
      </div>
      <div style={{textAlign:"center"}}><a id="menulink" href="/menu">Check out our full menu</a></div>

    </div>
)}

export default CarouselCustom;