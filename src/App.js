import './App.css';
import logo from './images/messi.png'
import like from './images/like.png'
import Boton from './components/Boton.jsx'
import Contador from './components/Contador.jsx'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const Click = () => {
    setNumClicks(numClicks + 1);
  };

  const Reset = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <h1> LIKES PARA MESSI </h1>
      <div className='logo-contenedor'>
        <img           
          src={logo}
          alt='Logo de perrito' />        
      </div>      
      <div className='contenedor-contador'>
        <Contador
        valor={numClicks} />
        <Boton
          texto= {<img src={ like } />}
          esBotonDeClick={true}
          manejarClick={Click} />
        <Boton
          texto='Reset'
          esBotonDeClick={false}
          manejarClick={Reset} />
      </div>      
    </div>
  );
}

export default App;
