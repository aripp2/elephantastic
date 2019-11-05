import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRandom, getFavorites, addFavorite, deleteFavorite, getBreeds } from '../util/apiCalls';
import { setRandom, throwError, updateLoading, setFavs, setBreeds } from '../actions';
import NavHeader from '../NavHeader/NavHeader';
import SearchForm from '../SearchForm/SearchForm';
import SearchContainer from '../SearchContainer/SearchContainer';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import Vote from '../Vote/Vote';
import './App.scss';

export class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  updateRandom = async() => {
    const { setRandom, throwError, updateLoading } = this.props;
    try {
      const random = await getRandom();
      setRandom(random)
      updateLoading(false)
    } catch({ message }) {
      updateLoading(false)
      throwError(message)
    }
  }

  async componentDidMount() {
    const { setFavs, throwError, updateLoading, setBreeds } = this.props
    try {
      const favs = await getFavorites()
      setFavs(favs)
      await this.updateRandom()
      const breeds = await getBreeds()
      setBreeds(breeds)
      updateLoading(false)
    } catch ({ message }) {
      updateLoading(false)
      throwError(message)
    }
  }

  updateFavs = async(id, status, favId) => {
    const { setFavs, throwError, updateLoading } = this.props;
    updateLoading(true)
    try {
      if (status) {
        await deleteFavorite(favId)
      } else {
        await addFavorite(id)
      }
        const favs = await getFavorites()
        setFavs(favs)
        updateLoading(false)
    } catch ({ message }){
      updateLoading(false)
      throwError(message)
    }
  }

  render() {
    const { errorMsg, isLoading, randomPup, favorites } = this.props;
    console.log(randomPup)
    return (
      <div className="App">
        <NavHeader />
        <main>
          {errorMsg && <h2>{errorMsg}</h2>}
          {isLoading && <h2>Loading...</h2>}
          {!isLoading && <Route exact path='/' render={() => <Vote updateFavs={this.updateFavs} updateRandom={this.updateRandom}/>}/>}
          <Route path='/search' render={() => 
              <SearchForm />}/>
          <Route path='/favorites' render={() => 
            <FavoritesContainer updateFavs={this.updateFavs}/>} />

        </main>
      </div>
    );
  }
}

export const mapStateToProps = ({ errorMsg, isLoading, randomPup, favorites }) => ({
  errorMsg,
  isLoading,
  randomPup,
  favorites
})

export const mapDispatchToProps = dispatch => ({
  setRandom: pup => dispatch(setRandom(pup)),
  throwError: error => dispatch(throwError(error)),
  setFavs: favs => dispatch(setFavs(favs)),
  updateLoading: bool => dispatch(updateLoading(bool)),
  setBreeds: breeds => dispatch(setBreeds(breeds))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
