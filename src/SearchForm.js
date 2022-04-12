import './SearchForm.css';
// import ArticleCard from './ArticleCard.js'; 
import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filteredArticles: [],
      emptySubmitError: 'Please add a search phrase',
      searchError: 'Sorry, no results found.',
      hasSearched: false
    };
  }

  render () {
    return (
          <form>
            <input className='search-bar-input'
              type='text'
              placeholder='Search Articles'
              value={this.state.searchTerm}
              onChange={this.handleChange}
              />
            <button className='submit-btn' onClick={(event) => this.handleSubmit(event)}>Submit</button>
         </form> 
    )
  }
}


export default SearchForm;

