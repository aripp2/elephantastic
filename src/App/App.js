import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRandom, getFavorites, addFavorite } from '../util/apiCalls';
import { setRandom, throwError, setFavs } from '../actions';
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
    const { setRandom, throwError } = this.props;
    try {
      const random = await getRandom();
      setRandom(random)
    } catch({ message }) {
      throwError(message)
    }
  }

  async componentDidMount() {
    const { setFavs, throwError } = this.props
    try {
      await this.updateRandom()
      const favs = await getFavorites()
      setFavs(favs)
    } catch ({ message }) {
      throwError(message)
    }
    // const { setRandom, throwError } = this.props;
    // try {
    //   const random = await getRandom();
    //   setRandom(random)
    // } catch({ message }) {
    //   throwError(message)
    // }
  }

  updateFavs = async() => {

  }

  render() {
    const { errorMsg, randomPup } = this.props;

    return (
      <div className="App">
        <NavHeader />
        <main>
          {errorMsg && <h2>{errorMsg}</h2>}
          {randomPup && <Route exact path='/' render={() => <Vote updateRandom={this.updateRandom}/>}/>}
          <Route path='/search' render={() => 
            <section>
              <SearchForm /> 
              <SearchContainer /> 
            </section>}/>
          <Route path='/favorites' render={() => 
            <FavoritesContainer />} />

        </main>
      </div>
    );
  }
}

export const mapStateToProps = ({ errorMsg, randomPup }) => ({
  errorMsg,
  randomPup
})

export const mapDispatchToProps = dispatch => ({
  setRandom: pup => dispatch(setRandom(pup)),
  throwError: error => dispatch(throwError(error)),
  setFavs: favs => dispatch(setFavs(favs))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
