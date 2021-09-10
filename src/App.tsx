import './App.scss';
import { NavigationBar, NavigationBarHeight } from './Components/NavigationBar/NavigationBar';
import { About } from './Components/Content/About/About';
import { Portfolio } from './Components/Content/Portfolio/Portfolio';
import { Contact } from './Components/Content/Contact/Contact';
import { smallScreen } from './developerTools/developerTools';


import { Route } from 'react-router-dom';
import { FireworksLanding } from './Components/FireworksLanding/FireworksLanding';
import { useContext, useReducer } from 'react';
import LanguageContext, { LanguageContextProvider, languageInitialState, languageReducer } from './Context/language';


export interface iApplicationProps { }


const App: React.FunctionComponent<iApplicationProps> = () => {
  //http://vyctoire.com/about sensaciond e vida
  //https://prashantsani.com/ figuras en 3d

  const [languageState, languageDispatch] = useReducer(languageReducer, languageInitialState)


  const languageContextValues = {
    languageState,
    languageDispatch
  }

  return (
    <LanguageContextProvider value={languageContextValues}>
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
    </LanguageContextProvider>
  );
}

export default App;
