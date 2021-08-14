import './App.css';
import { NavigationBar, NavigationBarHeight } from './Components/NavigationBar/NavigationBar';
import { Footer } from './Components/Footer/Footer';

import { About } from './Components/Content/About/About';
import { Portfolio } from './Components/Content/Portfolio/Portfolio';
import { Contact } from './Components/Content/Contact/Contact';
import { smallScreen } from './developerTools/developerTools';




function App() {


  return (
    <div className="App">
      <NavigationBar />

      {/* div that make place to navigation bar, if the screen is swamll, the navigarot go down, and no neceseary to make place */}
      {
        smallScreen() ? null :
          <div style={{ marginTop: NavigationBarHeight + "vh" }} />
      }
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
