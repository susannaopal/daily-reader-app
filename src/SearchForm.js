import './SearchForm.css';
import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }  


// The possible section value are: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world.

  render() {
    return (
      <form className='dropdown-form' onSubmit={this.handleSubmit}>
        <label>
          Pick a section:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="arts">ARTS</option>
            <option value="automobiles">AUTOMOBILES</option>
            <option value="books">BOOKS</option>
            <option value="business">BUSINESS</option>
            <option value="fashion">FASHION</option>
            <option value="food">FOOD</option>
            <option value="health">HEALTH</option>
            <option value="home">HOME</option>
            <option value="insider">INSIDER</option>
            <option value="magazine">MAGAZINE</option>
            <option value="movies">MOVIES</option>
            <option value="nyregion">NEW YORK REGION</option>
            <option value="obituaries">OBITUARIES</option>
            <option value="opinion">OPINION</option>
            <option value="politics">POLITICS</option>
            <option value="realestate">REAL ESTATE</option>
            <option value="science">SCIENCE</option>
            <option value="sports">SPORTS</option>
            <option value="sundayreview">SUNDAY REVIEW</option>
            <option value="technology">TECHNOLOGY</option>
            <option value="theater">THEATER</option>
            <option value="t-magazine">TIMES MAGAZINE</option>
            <option value="travel">TRAVEL</option>
            <option value="upshot">UPSHOT</option>
            <option value="us">US</option>
            <option value="world">WORLD</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;