import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRandom } from '../util/apiCalls';
import { setRandom, throwError } from '../actions';
import NavHeader from '../NavHeader/NavHeader';
import SearchForm from '../SearchForm/SearchForm';
import SearchContainer from '../SearchContainer/SearchContainer';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import Vote from '../Vote/Vote';
import './App.scss';

export class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     random: {},
  //     error: ''
  //   }
  // }

  async componentDidMount() {
    const { setRandom, throwError } = this.props;
    try {
      const random = await getRandom();
      setRandom(random)
    } catch({ message }) {
      throwError(message)
    }
  }

  render() {
    const { errorMsg, randomPup } = this.props;

    return (
      <div className="App">
        <NavHeader />
        <main>
          {errorMsg && <h2>{errorMsg}</h2>}
          {randomPup && <Route exact path='/' render={() => <Vote />}/>}
          <Route path='/search' render={() => 
            <main>
              <SearchForm /> 
              <SearchContainer /> 
            </main>}/>
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
  throwError: error => dispatch(throwError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
