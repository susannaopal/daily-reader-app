import React, { useEffect, useState } from 'react';
import './App.css';
import HeadlinesContainer from './HeadlinesContainer';
import Nav from './Nav'
import { fetchHeadlines } from './apiCall.js';
import SearchForm from './SearchForm.js';

const App = () => {
  const [headlines, setHeadlines] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchHeadlines()
      .then(data => {
        if (data.results) {
          setHeadlines(data.results)
          setError('')
        } else {
          setError('Uh Oh! There was an error, please try again.')
        }
      })
  }, [])

  
  return (
    <main className='App'>
      <Nav />
      <SearchForm headlines={headlines}/>
      <HeadlinesContainer headlines={headlines} />
    </main>
  )
}

export default App;