import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchForm.scss';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const { breeds } = this.props
    const breedList = breeds.map(breed => {
      return <option 
        key={breed.id} 
        value={breed.id}>{breed.name}</option>
    })
    console.log(breedList)
    return (
      <aside>
        <form>
          <h3>Choose a Breed:</h3>
          <select>
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