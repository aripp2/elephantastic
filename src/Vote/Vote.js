import React from 'react';
import './Vote.scss';


const Vote = ({ random }) => {

  return (
    <section>
      <button>LOVE IT!</button>
      <button>NOT SO MUCH</button>
      <img src={random.url} alt='dog'/>
    </section>
  )
}

export default Vote;