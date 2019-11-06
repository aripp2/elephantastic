import React from 'react';
import './SearchContainer.scss';

const SearchContainer = ({ breedImages }) => {
  const selectedBreedImages = breedImages.map(image => {
    return <img 
      key={image.id}
      id={image.id}
      src={image.url}
      alt='dog'
    />
  })
  return (
      <section className='searchImgs'>
        {breedImages.length === 0 && <h2 className='selectPrompt'>Select a breed from the left to see images.</h2>}
        { selectedBreedImages } 
      </section>
  )
}

export default SearchContainer;