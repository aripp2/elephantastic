import React from 'react';
import { connect } from 'react-redux';
import { postVote } from '../util/apiCalls';
import './Vote.scss';


const Vote = ({ randomPup, favorites, updateRandom, updateFavs }) => {
  const { url, id } = randomPup
  const ids = favorites.map(fav => fav.image_id)
  const favStatus = ids.includes(id)
  let favId = null;
  if (favStatus) {
    favId = favorites.reduce((acc, fav) => {
      if(fav.image_id === id) {
        acc += fav.id
      }
      return acc
    }, 0)
  }
  const buttonRole = favStatus ? 'Delete Favorite' : 'Add Favorite';
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
        onClick={() => updateFavs(id, favStatus, favId)}
      >{buttonRole}</button>

    </section>
  )
}

export const mapStateToProps = ({ randomPup, favorites }) => ({
  randomPup,
  favorites
})


export default connect(mapStateToProps)(Vote);