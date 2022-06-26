
import { useState } from "react";
import ArticleCard from './ArticleCard.js'; 

const SearchForm = ({headlines}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = headlines.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
      console.log("FILTERED DATA:", filteredData)
      console.log("SEARCH WORD:", searchWord)
    }   
  }
  
const ArticleCard = ({ title, abstract, byline, url }) => {
  return (
    <div className="article-card">
      <a href={url}>
      <h3>{title}</h3>
      <h4>{byline}</h4>
      <p>{abstract}</p>
      </a>
    </div>
  )
}
  return (
    <div className='search'>
      <div className='search-inputs'>
        <input 
        type='text'
        placeholder='🔎 Search Headlines'
        value={wordEntered}
        onChange={handleFilter}
        />
        <div className='search-results'>
          {filteredData.length > 0 ? <ArticleCard filteredData={filteredData} /> : <ArticleCard headlines={headlines}/>}
        </div>
      </div>
    </div>
  )
}

export default SearchForm;



// import './SearchForm.css';
// import ArticleCard from './ArticleCard.js'; 
// import React, { Component } from 'react';

// class SearchForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: '',
//       filteredArticles: [],
//       hasSearched: false,
//       emptySubmitError: 'Please add something before searching.',
//       searchError: 'Sorry, there are no headlines available.'
//     };
//   }

//  handleChange = (event) => {
//     this.setState({searchTerm: event.target.value})
//     this.setState({hasSearched: false})
//   };

//    handleSubmit = (event) => {
//     event.preventDefault()
//     this.setState({hasSearched: true})
//     if (this.state.searchTerm === '') {
//       console.log("there is no search term")
//       return 
//     } 
//      const foundArticles = this.props.headlines.filter((headline) => {
//       if(headline.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
//         return headline.title
//       }
//     });
//     this.setState({ filteredArticles: foundArticles })
//   };
  
//   render () { 
//     const searchedArticles = this.state.filteredArticles.map((headline, index) => {
//       return (
//         <div className='returned-headlines-div'>
//         <p>Search Result:</p>
//         <a href={headline.url}>
//         <ArticleCard
//         title={headline.title}
//         byline={headline.byline}
//         abstract={headline.abstract}
//         id={index}
//         key={index}
//        />
//       </a>
//       </div>
//     )
//   });
//     return (
//       <>
//           <form>
//             <h3>Search Headlines: </h3>
//             <input className='search-bar-input'
//               type='text'
//               placeholder='🔎 Search Headlines'
//               value={this.state.searchTerm}
//               onChange={this.handleChange}
//               />
//              <button className='submit-btn' onClick={(event) => this.handleSubmit(event)}>Submit</button>
//          </form> 
//           {this.state.hasSearched && this.state.filteredArticles.length > 0 && searchedArticles}
//           {this.state.hasSearched && this.state.searchTerm === '' && this.state.emptySubmitError}
//           {this.state.hasSearched && this.state.searchTerm !== '' && this.state.filteredArticles.length === 0 && this.state.searchError}
//       </>
//     )
//   }
// }
