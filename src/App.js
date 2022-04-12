import React, { Component } from 'react';
import './App.css';
import HeadlinesContainer from './HeadlinesContainer';
import Nav from './Nav'
// import Home from './Home.js';
import { fetchHeadlines } from './apiCall.js';
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
      error: ''
    };
  }

componentDidMount = () => {
  fetchHeadlines()
  // .then(data => console.log("data", data.results))
  // .then(data => this.setState({ headlines: data.results }))
 
  .then(data => this.setState({headlines: [...data.results]}))
  .catch(error => this.setState({error: error}))
}

render() {
  return(
      <main className='App'>
          <Nav />
          <SearchForm />
          {/* <Home /> */}
          <HeadlinesContainer headlines={this.state.headlines}/>
          {/* <Routes>  */}
            {/* <Route path='*' element={<Error />} /> */}
            {/* <Route path='/' element={<Home />}/> */}
            {/* <Route path='/quotes' element={<Quotes quotes={this.state.quotes} />}/> */}
            {/* <Route path='/search' element={<Search quotes={this.state.quotes} />}/> */}
          {/* </Routes> */}
      </main>
    )
  }
};

export default App;