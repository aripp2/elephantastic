import React from 'react';
import { connect } from 'react-redux';
import './FavoritesContainer.scss';

export const FavoritesContainer = ({ favorites, updateFavs }) => {

  const favs = favorites.map(fav => {
    return (
      <div key={fav.image_id}>
        <img 
          id={fav.id} 
          src={fav.image.url} 
          alt='dog' 
        />
        <button
          onClick={() => updateFavs(fav.image_id, true, fav.id)}
        >Delete Favorite</button>
      </div>
     ) 
  })

  return (
    <section>
      {favs}
    </section>
  )
}

export const mapStateToProps = ({ favorites }) => ({
  favorites
})

export default connect(mapStateToProps)(FavoritesContainer);