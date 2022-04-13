
import './SearchForm.css';
import ArticleCard from './ArticleCard.js'; 
// import HeadlinesContainer from './HeadlinesContainer.js'
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filteredArticles: [],
      hasSearched: false
    };
  }

 handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
    this.setState({hasSearched: false})
  };

   handleSubmit = (event) => {
    event.preventDefault()
    this.setState({hasSearched: true})
    if (this.state.searchTerm === '') {
      console.log("there is no search term")
      return 
    } 
     const foundArticles = this.props.headlines.filter((headline) => {
      if(headline.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {

        console.log("headine", headline.title)
        return headline.title
      }
    });
    this.setState({ filteredArticles: foundArticles })
  };
  
  render () { 
    const searchedArticles = this.state.filteredArticles.map((headline) => {
      return (
        <ArticleCard
        title={headline.title}
        byline={headline.byline}
        abstract={headline.abstract}
       />
    )
  });

    return (
      <>
          <form>
            <input className='search-bar-input'
              type='text'
              placeholder='Search Articles'
              value={this.state.searchTerm}
              onChange={this.handleChange}
              />
             <button className='submit-btn' onClick={(event) => this.handleSubmit(event)}>Submit</button>
         </form> 
         {this.state.hasSearched && this.state.filteredArticles.length > 0 && searchedArticles}
      </>
    )
  }
}


export default SearchForm;

