import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchForm.scss';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedBreed: null
    }
  }

  changeHandler = (e) => {
    this.setState({ selectedBreed: e.target.value })
  }



  render() {
    console.log(this.state.selectedBreed)

    const { breeds } = this.props
    const breedList = breeds.map(breed => {
      return <option 
        key={breed.id} 
        value={breed.name}
        >{breed.name}</option>
    })
    console.log(breedList)
    return (
      <aside>
        <form>
          <h3>Choose a Breed:</h3>
          <select
            value={this.state.selectedBreed}
            onChange={this.changeHandler}
          >
            { breedList }
          </select>
        </form>
      </aside>
    )
  }
}

export const mapStateToProps = ({ breeds, favorites }) => ({
  breeds, 
  favorites
})

export default connect(mapStateToProps)(SearchForm);