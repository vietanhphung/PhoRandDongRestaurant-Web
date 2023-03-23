import Navbar from './Navbar';
import Main3 from './Main3';
import Contact from './Contact';
import About from'./About';
import Menu from './Menu';
import {useLocation, Route, Routes} from "react-router-dom";
import React from 'react';
import MenuButton from './MenuButton';
import Footer from './Footer';
import CarouselCustom from './Carousel';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        
          <Routes location={location} key={location.pathname}>
            <Route path ="/" element={<><Main3/></>}/>
            <Route path='/navbar' element={<Navbar/> } />
            <Route path='/contact' element={<><MenuButton/><Contact/><Footer/></>}/>
            <Route path='/about' element={<><MenuButton/><About/><Footer/></>}/>
            <Route path='/menu' element={<><MenuButton/><Menu/><Footer/></>}/>
            <Route path='/test' element={<><CarouselCustom/></>}/>
            
            
          </Routes>
       

    );
  }
  
  export default AnimatedRoutes;
  