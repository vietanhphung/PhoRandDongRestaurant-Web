 import React, { useEffect } from "react";
 import "./Footer.css";

function Footer() {



    return(
<div className="footer" >
    <div id="mapContainer" style={{display:"none"}}>
    </div>
    <div id="backgroundStyle"><div id="photoFooter"></div></div>

    <p className="contact">Pho Rang Dong<br/>1193 St Clair Ave W.<br/>Toronto, ON M6E 1B5<br/> <a className="contact" href="tel:4168484775"> (416) 848-4775</a></p>
    <div id="credit" ><hr id="line"></hr><p>Website by Connor Phung</p></div>
    

</div>



    )
}

export default Footer;