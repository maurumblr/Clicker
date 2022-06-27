import React from 'react';
import Estilo from '../css/Contador.css'

function Contador({ valor }){
  return(
    <div className='contador' >
      {valor}
    </div>
  )
}

export default Contador