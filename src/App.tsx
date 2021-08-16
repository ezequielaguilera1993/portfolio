import './App.css';
import { NavigationBar, NavigationBarHeight } from './Components/NavigationBar/NavigationBar';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/Content/About/About';
import { Portfolio } from './Components/Content/Portfolio/Portfolio';
import { Contact } from './Components/Content/Contact/Contact';
import { smallScreen, TopBottomOfScreen } from './developerTools/developerTools';

import React, { useState, CSSProperties } from 'react'

import { Route } from 'react-router-dom';
import { FireworksLanding } from './Components/FireworksLanding/FireworksLanding';
import { Fireworks } from 'fireworks-js/dist/react';

const options = {
  ...JSON.parse(`{
      "hue": {
          "min": 0,
          "max": 345
      },
      "delay": {
          "min": 15,
          "max": 15
      },
      "rocketsPoint": 60,
      "speed": 10,
      "acceleration": 1.2,
      "friction": 0.96,
      "gravity": 1,
      "particles": 90,
      "trace": 3,
      "explosion": 6,
      "autoresize": true,
      "brightness": {
          "min": 50,
          "max": 80,
          "decay": {
              "min": 0.015,
              "max": 0.03
          }
      },
      "boundaries": {
          "x": 50,
          "y": 50,
          "width": 1536,
          "height": 754,
          "visible": false
      },
      "sound": {
          "enable": true,
          "files": [
              "https://crashmax-dev.github.io/fireworks-js/sounds/explosion0.mp3",
              "https://crashmax-dev.github.io/fireworks-js/sounds/explosion1.mp3",
              "https://crashmax-dev.github.io/fireworks-js/sounds/explosion2.mp3"
          ],
          "volume": {
              "min": 4,
              "max": 8
          }
      },
      "mouse": {
          "click": true,
          "move": false,
          "max": 1
      }
  }`)
}

// let scrollCache = 0


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
