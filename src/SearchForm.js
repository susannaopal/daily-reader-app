// import './SearchForm.css';
// import React, { Component } from 'react';

// class SearchForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form className='dropdown-form' onSubmit={this.handleSubmit}>
//         <label>
//           Pick a section:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="arts">ARTS</option>
//             <option value="automobiles">AUTOMOBILES</option>
//             <option value="books">BOOKS</option>
//             <option value="business">BUSINESS</option>
//             <option value="fashion">FASHION</option>
//             <option value="food">FOOD</option>
//             <option value="health">HEALTH</option>
//             <option value="home">HOME</option>
//             <option value="insider">INSIDER</option>
//             <option value="magazine">MAGAZINE</option>
//             <option value="movies">MOVIES</option>
//             <option value="nyregion">NEW YORK REGION</option>
//             <option value="obituaries">OBITUARIES</option>
//             <option value="opinion">OPINION</option>
//             <option value="politics">POLITICS</option>
//             <option value="realestate">REAL ESTATE</option>
//             <option value="science">SCIENCE</option>
//             <option value="sports">SPORTS</option>
//             <option value="sundayreview">SUNDAY REVIEW</option>
//             <option value="technology">TECHNOLOGY</option>
//             <option value="theater">THEATER</option>
//             <option value="t-magazine">TIMES MAGAZINE</option>
//             <option value="travel">TRAVEL</option>
//             <option value="upshot">UPSHOT</option>
//             <option value="us">US</option>
//             <option value="world">WORLD</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default SearchForm;


import './SearchForm.css';
// import ArticleCard from './ArticleCard.js'; 
import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filteredArticles: []
      // hasSearched: false
    };
  }

 handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
    // this.setState({hasSearched: false})
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
        // console.log("this.searchterm", this.state.searchTerm)
        return headline.title
      }
    });
    this.setState({ filteredArticles: foundArticles })
  };
  
  render () { 
    // console.log("state set", this.state.filteredArticles)
    // console.log("console", this.props.headlines[1].title)
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

