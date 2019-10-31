import React, { Component } from 'react';
import { getRandom } from './util/apiCalls';
import Header from './Header/Header';
import NavForm from './NavForm/NavForm';
import MainContainer from './MainContainer/MainContainer';
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
        <Header />
        <main>
          <NavForm />
          <MainContainer random={this.state.random}/>
        </main>
      </div>
    );
  }
}

export default App;
