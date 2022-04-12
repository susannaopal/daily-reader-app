import React, { useState, useEffect } from 'react';
import './App.css';
import ArticlesContainer from './ArticlesContainer';
import SearchForm from './SearchForm.js';

const App = () => {
const [articles, setArticles] = useState([]);

  return (
    <main className="App">
      <h1>Headlines</h1>
      <ArticlesContainer />
    </main>
  )
}

export default App;
