import React from 'react';
import { connect } from 'react-redux';
import { postVote } from '../util/apiCalls';
// import { setRandom, throwError } from '../actions';

import './Vote.scss';


const Vote = ({ randomPup, updateRandom }) => {
  const { url, id } = randomPup
  console.log(randomPup)
  return (
    <section>
      <button
        onClick={() => {postVote(id, 1); updateRandom()}}
      >LOVE IT!</button>
      <button
        onClick={() => {postVote(id, 0); updateRandom()}}
      >NOT SO MUCH</button>
      <img className='voteImg' src={url} alt='dog'/>
      <button>Favorite</button>

    </section>
  )
}

export const mapStateToProps = ({ randomPup }) => ({
  randomPup
})

// export const mapDispatchToProps = dispatch => ({
//   setRandom: pup => dispatch(setRandom(pup))
// })

export default connect(mapStateToProps)(Vote);