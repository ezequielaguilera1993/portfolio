import React/* , { Children } */ from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { developerTools } from './developerTools/developerTools';
// import { useEffect } from 'react';
// import { CharSizer } from './Components/UtilComponents/CharSizer/CharSizer';

// developerTools({ consoleInfo: true, showMargins: true, marginSize: 2 })


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <CharSizer maxms={165} /> */}
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





