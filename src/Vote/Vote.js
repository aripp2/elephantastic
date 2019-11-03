import React from 'react';
import { connect } from 'react-redux';
import { postVote, addFavorite } from '../util/apiCalls';
// import { setRandom, throwError } from '../actions';

import './Vote.scss';


const Vote = ({ randomPup, favorties, updateRandom }) => {
  console.log('in vote favs', favorties)
  const { url, id } = randomPup
  console.log(randomPup)
  // const favStatus = favorties.find(fav => fav.image_id === id)
  // console.log('status', favStatus)
  return (
    <section>
      <button
        onClick={() => {postVote(id, 1); updateRandom()}}
      >LOVE IT!</button>
      <button
        onClick={() => {postVote(id, 0); updateRandom()}}
      >NOT SO MUCH</button>
      <img className='voteImg' src={url} alt='dog'/>
      <button
        onClick={() => addFavorite(id)}
      >Favorite</button>

    </section>
  )
}

export const mapStateToProps = ({ randomPup, favorties }) => ({
  randomPup,
  favorties
})


export default connect(mapStateToProps)(Vote);