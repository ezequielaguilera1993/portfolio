import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import { NavigationBar } from './Components/NavigationBar/NavigationBar';

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
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
