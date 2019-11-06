import React from 'react';
import { connect } from 'react-redux';
import './FavoritesContainer.scss';

export const FavoritesContainer = ({ favorites, updateFavs }) => {

  const favs = favorites.map(fav => {
    return (
      <div className='img-container' key={fav.image_id}>
        <img 
          className='fav-img'
          id={fav.id} 
          src={fav.image.url} 
          alt='dog' 
        />
        <button
          className='remove-btn'
          onClick={() => updateFavs(fav.image_id, true, fav.id)}
        >Delete Favorite</button>
      </div>
     ) 
  })

  return (
    <section className='favs-container'>
      {favs}
    </section>
  )
}

export const mapStateToProps = ({ favorites }) => ({
  favorites
})

export default connect(mapStateToProps)(FavoritesContainer);