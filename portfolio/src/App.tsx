import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import { NavigationBar, NavigationBarHeight } from './Components/NavigationBar/NavigationBar';
import { Footer } from './Components/Footer/Footer';
import { visualGuide } from './developerTools';
import { About } from './Components/Content/About/About';
import { Portfolio } from './Components/Content/Portfolio/Portfolio';
import { Contact } from './Components/Content/Contact/Contact';

function App() {
  visualGuide({ consoleInfo: true })

  return (
    <div className="App">
      <NavigationBar />
      <div style={{ marginTop: NavigationBarHeight }} />{/* div that make place to navigation bar */}
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
