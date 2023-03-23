
import './App.css';
import AnimatedRoutes from'./AnimatedRoutes';
import {BrowserRouter as Router} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';

function App() {
  return (
    <ParallaxProvider>

    <div className="App">

      <Router>
          <AnimatedRoutes/>  
      </Router>
      </div>
      </ParallaxProvider>      


  );
}

export default App;
