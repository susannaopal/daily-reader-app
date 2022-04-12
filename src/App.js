import React, { Component } from 'react';
import './App.css';
import HeadlinesContainer from './HeadlinesContainer';
import Nav from './Nav'
// import Home from './Home.js';
import { fetchHeadlines, fetchSingleSection } from './apiCall.js';
import SearchForm from './SearchForm.js';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       headlines: [],
//     }

//   return (
//     <main className="App">
//       <Nav />
//       <h1>Headlines</h1>
//       <HeadlinesContainer  />
//     </main>
//   )
// }
// }

// import React, { Component } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { fetchQuotes } from '../API/apiCall.js';
// import '../CSS/App.css';
// import Quotes from './Quotes.js';
// import Nav from './Nav.js';
// import Search from './Search.js';
// import Home from './Home.js';
// import Error from './Error.js';

// export default App;

class App extends Component {
  constructor() {
    super();
    this.state = {
      headlines: [],
      singleSectionHeadlines: [],
      error: ''
    };
  }

componentDidMount = () => {
  fetchHeadlines()
  .then(data => this.setState({headlines: [...data.results]}))
  .catch(error => this.setState({error: error}))
}

render() {
  return(
      <main className='App'>
          <Nav />
          <SearchForm headlines={this.state.headlines}/>
          <HeadlinesContainer headlines={this.state.headlines}/>
      </main>
    )
  }
};

export default App;