import React from "react";
import mainvideo from './images/phorangdong.mov';
import mainposter from './images/mainposter.jpg';
import overlay2 from './images/overlay2.png';
import overlay1 from './images/overlay1.png';
import mainimgrow2 from './images/mainimgrow2.jpg';

import './Main.css';



export default function Main(){

return (
<>
<div className="Main" >
    
  <div className="OverlayStack">
      <div className="OverlayBottom">
          <video className='MainVideo' autoPlay  muted poster={mainposter}>
          <source src={mainvideo} type="video/mp4"/>
          </video>
      </div>
      <div className='OverlayLevel1'>
          <img className="Overlay1" src={overlay1} ></img>
      </div>
      <div className='OverlayLevel2'>
          <img className="Overlay2" src={overlay2}></img>
      </div>
      <div className="OverlayLevel3">
        <h2 className="Overlay3">
          Visit us at<br/> Pho Rang Dong <br/> 1193 St Clair Ave W, Toronto ON M6E 1B5
        </h2>
      </div>

{/* row 2 */}
      <div className='OverlayBottom2'>
          <img className="MainImg" src={mainimgrow2}></img>
      </div>
    </div>

  < div id="image-track">
    <img className="image" src=""></img>
  </div>




</div>


</> );
}