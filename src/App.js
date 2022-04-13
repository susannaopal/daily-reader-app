import React, { Component } from 'react';
import './App.css';
import HeadlinesContainer from './HeadlinesContainer';
import Nav from './Nav'
import { fetchHeadlines, fetchSingleSection } from './apiCall.js';
import SearchForm from './SearchForm.js';
// import { Routes, Route } from 'react-router-dom';


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