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




// let scrollCache = 0

window.addEventListener("scroll", () => {
  const innerHeight = window.innerHeight /* || document.documentElement.clientHeight ||
    document.body.clientHeight; */
  let HTML = document.documentElement
  var HTMLmeasures = HTML.getBoundingClientRect();
  console.log(HTMLmeasures.bottom, innerHeight)
  //Si lo que le falta par alo ultimo, es tu viewport, ejecuta la alerta
  // if (!Math.round(innerHeight - HTMLmeasures.bottom)) { alert("Bottom!") }

});


function App() {

  //http://vyctoire.com/about sensaciond e vida
  //https://prashantsani.com/ figuras en 3d


  return (
    <div className="App">
      <Route path="/" >
        {/* <NavigationBar /> */}
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
