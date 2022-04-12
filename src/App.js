import React, { useState, useEffect } from 'react';
import './App.css';
import ArticlesContainer from './ArticlesContainer';
import SearchForm from './SearchForm.js';

const App = () => {
const [articles, setArticles] = useState([]);

  return (
    <>
      <h1>Headlines</h1>
      <ArticlesContainer />
    </>
  )
}

export default App;
