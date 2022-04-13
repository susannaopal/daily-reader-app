
import './SearchForm.css';
import ArticleCard from './ArticleCard.js'; 
import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filteredArticles: [],
      hasSearched: false,
      emptySubmitError: 'Please add something before searching.',
      searchError: 'Sorry, there are no headlines available.'
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
        return headline.title
      }
    });
    this.setState({ filteredArticles: foundArticles })
  };
  
  render () { 
    const searchedArticles = this.state.filteredArticles.map((headline, index) => {
      return (
        <>
        <a href={headline.url}>
        <ArticleCard
        title={headline.title}
        byline={headline.byline}
        abstract={headline.abstract}
        id={index}
        key={index}
       />
      </a>
      </>
    )
  });

    return (
      <>
          <form>
            <h3>Search Headlines: </h3>
            <input className='search-bar-input'
              type='text'
              placeholder='🔎 Search Articles'
              value={this.state.searchTerm}
              onChange={this.handleChange}
              />
             <button className='submit-btn' onClick={(event) => this.handleSubmit(event)}>Submit</button>
         </form> 
         {this.state.hasSearched && this.state.filteredArticles.length > 0 && searchedArticles}
          {this.state.hasSearched && this.state.searchTerm === '' && this.state.emptySubmitError}
          {this.state.hasSearched && this.state.searchTerm !== '' && this.state.filteredArticles.length === 0 && this.state.searchError}
      </>
    )
  }
}


export default SearchForm;

