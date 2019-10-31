import React from 'react';
import './MainContainer.scss';


const MainContainer = ({ random }) => {

  return (
    <section>
      <button>LOVE IT!</button>
      <button>NOT SO MUCH</button>
      <img src={random.url} alt='dog'/>
    </section>
  )
}

export default MainContainer;