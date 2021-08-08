import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './Components/NavigationBar/NavigationBar';
import { Footer } from './Components/Footer/Footer';
import { Content } from './Components/Content/Content';
// const { Provider, Consumer } = newContext;
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
