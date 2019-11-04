import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './SearchContainer.scss';

const SearchContainer = () => {
  return (
    <div>
      <SearchForm />
      <section>
        Choose a breed to see images. 
      </section>
    </div>
  )
}

export default SearchContainer;