import React from 'react';
import { connect } from 'react-redux';
import './FavoritesContainer.scss';

const FavoritesContainer = ({ favorites }) => {

  const favs = favorites.map(fav => {
    return <img key={fav.image_id} src={fav.image.url} alt='dog' />
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