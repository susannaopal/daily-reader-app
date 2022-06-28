import { useEffect, useState } from 'react';
import { fetchHeadlines } from './apiCall.js';
import HeadlinesContainer from './HeadlinesContainer';
import Nav from './Nav'
import SearchForm from './SearchForm.js';
import './App.css';

const App = () => {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  // const [searchErrorMsg, setSearchErrorMsg] = useState( 'That is not available, please try your search again.')


  useEffect(() => {
    fetchHeadlines()
      .then(data => {
        if (data.results) {
          setHeadlines(data.results)
          setError('')
        } else {
          setError('Oh no! There was an error, please try again.')
        }
      })
      }, [])
  
  return (
    <main className='App'>
      <Nav />
      {/* <SearchForm headlines={headlines} setIsSearching={setIsSearching} setSearchErrorMsg={setSearchErrorMsg}/>
      {!isSearching ? <HeadlinesContainer headlines={headlines} /> : searchErrorMsg} */}
      <SearchForm headlines={headlines} setIsSearching={setIsSearching} isSearching={isSearching}/>
      {!isSearching && <HeadlinesContainer headlines={headlines} />}
    </main>
  )
}      

export default App;