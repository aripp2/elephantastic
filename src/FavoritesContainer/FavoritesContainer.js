import React from 'react';
import { connect } from 'react-redux';
import './FavoritesContainer.scss';

const FavoritesContainer = ({ favorites }) => {

  const favs = favorites.map(fav => {
    return (
      <div key={fav.image_id}>
        <img 
          id={fav.id} 
          src={fav.image.url} 
          alt='dog' />
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