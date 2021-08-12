import React/* , { Children } */ from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { developerTools } from './developerTools/developerTools';

developerTools({ consoleInfo: true, showMargins: true, marginSize: 2 })

/* 
- Contacto, agregar titulo de enviar mail, poner whatsApp
- Chat whatsApp en vivo
- Agendar calendly
- Hacer scroll para "chater con whatsapp en vivo" - "enviar un mail" - "agendar reunion en calendly"  
-
- Mejorar pokemon api
- Hacer video de pokemon api
- 
- Poner enlaces a github y linkedin
- Boton para descargar cv (o que lo abra en otra pestaña y que aparezca el boton para descargarlo)
- 
- 
- 






*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


