import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBreedImages } from '../util/apiCalls';
import './SearchForm.scss';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedBreed: null
    }
  }

  changeHandler = (e) => {
    const { breeds } = this.props
    const selected = breeds.find(breed => breed.name === e.target.value)
    this.setState({ selectedBreed: selected })
    this.getSelectedImages(selected.id)
  }

  getSelectedImages = async(id) => {
    try {
      const imgs = await getBreedImages(id)
      console.log(imgs)
    } catch ({ message }){
      console.log(message)
    }
  }

  render() {
    const { selectedBreed } = this.state
    console.log(selectedBreed)
    const { breeds } = this.props
    console.log(breeds)
    const breedList = breeds.map(breed => {
      return <option 
        key={breed.id} 
        value={breed.name}
        >{breed.name}</option>
    })
    return (
      <div>
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
          {selectedBreed && 
            <article>
              <h4>{selectedBreed.name}</h4>
              <p>Breed Group: {selectedBreed.breed_group}</p>
              <p>Bred For: {selectedBreed.bred_for}</p>
              <p>Average Height: {selectedBreed.height.imperial} in</p>
              <p>Average Weight: {selectedBreed.weight.imperial} lbs</p>
              <p>Average Life Span: {selectedBreed.life_span}</p>
              <p>{selectedBreed.temperament}</p>
          </article>}
        </aside>
        <section>
          
        </section>
      </div>
    )
  }
}

export const mapStateToProps = ({ breeds, favorites }) => ({
  breeds, 
  favorites
})

export default connect(mapStateToProps)(SearchForm);