import React, { useEffect } from "react";
import menuItems from "./MenuItems";
import Card from "./Card";
import "./Card.css";



function handleCardClick(linkId){
    const id = linkId.slice(1);
    const elem = document.getElementById(id);
    const allElem = document.getElementsByClassName("menuSection");
    for(var i = 0; i<allElem.length;i++)
    {allElem[i].style.backgroundColor = 'transparent'}
    elem.style.backgroundColor = 'rgb(200,149,134)';
}


function createCard(item){
return(
    <div onClick={()=> handleCardClick(item.link)}>
        <Card 
        link={item.link}
        image = {item.image}  
        title = {item.dishCategory}
        description= {item.description}
        />
    </div>
    )
};



function MenuCard(){
    return(
    <>
    <div id="cardContainer" >
        {menuItems.map(createCard)}
    </div>

    <div className="menuText">
    <h1>Appetizers </h1>
    <div className="menuSection" id="appetizer">

        <h4>Fried Spring Rolls - 3pc $7 </h4>
        <p>pork, vegetables</p>

        <h4>Vegetarian Spring Rolls - 3pc $7</h4>
        <p>mixed vegetables</p>
        <h4>Fresh rolls</h4> 
            <p>shrimp, chicken $8 / beef $7 / chicken $7 / tofu $7</p>
        
        <h4>Mixed Salad $6</h4><p></p>
        <h4>Green Mango Salad</h4>
        <p>plain $7 / shrimp $9 / chicken $8 </p>
        <h4>Wonton soup $6.5/$9</h4>
        <p>shrimp, pork</p>
    </div>
    <h1>Mains</h1>
    <div className="menuSection" id="steamedRice">
        <h4>Steamed Rice</h4>
        <p>grilled chicken & pork chop, salad $13
        <br/>grilled pork chop, salad $12.5
        <br/>grilled chicken, salad $13
        <br/>chicken curry, vegetables $11.5
        <br/>stirfried chicken/beef/tofu, lemongrass, mixed vegetables $11.5
        <br/>stirfried shrimp, lemongrass, mixed vegetables $13
        <br/>fried tofu w/ tomato sauce, mixed vegetables $11.5
        </p>
    </div>

    <div className="menuSection" id="pho"> 
        <h4>Pho $10.5/$11.5</h4>
        <p>rice noodles, beef stock, herbs, and any combination of chicken, tofu, rare beef, well-done beef, and beef balls  </p>
    </div> 


    <div className="menuSection" id= "vermicelliDishes">
        <h4>Bun Cha Hanoi $12</h4>
        <p>grilled pork, vermicelli, sweet and sour fish sauce, salad</p>
        <h4>Bun Cha Gio </h4>
        <p> vermicelli, sweet and sour fish sauce
        <br/>3pc spring rolls $10.5
        <br/>1pc spring roll, grilled chicken $10.5
        <br/>1pc spring roll, fried shrimps $11.5 </p>
    </div>   


    <div className="menuSection" id="vermicelliSoup">
        <h4>Bun Rieu $12.5</h4>
        <p>rice noodles, shrimp, crab meat, fried fish cake, veg  </p>
        <h4>Bun Cha Ca $11.5</h4>
        <p>rice noodles, fried fish cake, veg  </p>
        <h4>Hot and Sour Soup</h4>
        <p>rice noodles, hot and sour stock, herbs,  <br/>
        mixed seafood $12.5<br/>
        any combination of chicken, tofu, rare beef, well-done beef $11 </p>
    </div>

    <div className="menuSection" id="eggNoodle">
        <h4>Stirfried Egg Noodles </h4>
        <p>stirfired noodles, vegetables,
        <br/>chicken or beef $11 
        <br/>mixed seafood $12.5 
        <br/>chicken, beef, seafood $13</p>
    </div>

    <div className="menuSection" id="padThai">
        <h4>Pad Thai w/ curry </h4>
        <p>stirfried rice noodles, side green salad,
        <br/>tofu $11.5
        <br/>chicken $11.5</p>

        <h4>Lemongrass Pad Thai</h4>
        <p>shrimp, broccoli $13
        <br/>mixed vegetables, chicken/beef $11
        <br/>mixed vegetables, chicken, beef $12.5</p>
    </div>

    <div className="menuSection" id="friedRice">
        <h4>Fried Rice</h4>
        <p>fried rice, vegetables,
        <br/>chicken/beef/tofu $10.5
        <br/>mixed seafood $12.5
        <br/>mixed seafood, beef, chicken $13</p>
    </div>

    <div className="menuSection" id="hotDish">
        <h4>Hot Dish</h4>
        <p>sizzling hot plate, side of rice, soup, mixed vegetables,
        <br/>beef/chicken $14
        <br/>beef & chicken $15
        <br/>seafood $16 </p>
    </div>

    </div>
</>    
    )
};

export default MenuCard; 