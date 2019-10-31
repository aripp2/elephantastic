import React, { Component } from 'react';
import { Route } from "react-router-dom";

import { getRandom } from '../util/apiCalls';
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
      random: {},
      error: ''
    }
  }

  async componentDidMount() {
    try {
      const random = await getRandom();
      this.setState({ random })
    } catch({ message }) {
      this.setState({ message})
    }
  }

  render() {


    return (
      <div className="App">
        <NavHeader />
        <main>
          <Route exact path='/' render={() => <Vote random={this.state.random}/>}/>
          <Route path='/search' render={() => 
            <main>
              <SearchForm /> 
              <SearchContainer /> 
            </main>  
              }/>
          <Route path='/favorites' render={() => <FavoritesContainer />} />

        </main>
      </div>
    );
  }
}

export default App;
