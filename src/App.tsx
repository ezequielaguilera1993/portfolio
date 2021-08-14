import './App.css';
import { NavigationBar, NavigationBarHeight } from './Components/NavigationBar/NavigationBar';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/Content/About/About';
import { Portfolio } from './Components/Content/Portfolio/Portfolio';
import { Contact } from './Components/Content/Contact/Contact';
import { smallScreen } from './developerTools/developerTools';

import React, { useState, CSSProperties } from 'react'

import { Route } from 'react-router-dom';
import { FireworksLanding } from './Components/FireworksLanding/FireworksLanding';





function App() {

  //http://vyctoire.com/about sensaciond e vida
  //https://prashantsani.com/ figuras en 3d
  return (
    <div className="App">
      <Route path="/" >
        <NavigationBar />
        {/* div that make place to navigation bar, if the screen is swamll, the navigarot go down, and no neceseary to make place */}
        {
          smallScreen() ? null :
            <div style={{ marginTop: NavigationBarHeight + "vh" }} />
        }
        <About />
        <Portfolio />
        <Contact />
        {/* <Footer /> */}
        <FireworksLanding />
      </Route>
    </div >
  );
}

export default App;
