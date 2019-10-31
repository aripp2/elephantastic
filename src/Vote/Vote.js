import React from 'react';
import { connect } from 'react-redux';
import './Vote.scss';


const Vote = ({ randomPup }) => {
  
  return (
    <section>
      <button>LOVE IT!</button>
      <button>NOT SO MUCH</button>
      <img className='voteImg' src={randomPup.url} alt='dog'/>
    </section>
  )
}

export const mapStateToProps = ({ randomPup }) => ({
  randomPup
})

export default connect(mapStateToProps)(Vote);