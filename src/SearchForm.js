import { useState } from "react";

const SearchForm = ({headlines, setIsSearching, isSearching}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  
  
  const handleFilter = (event) => {
    setIsSearching(true)
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = headlines.filter((headline) => {
      return headline.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
      setIsSearching(false)
    } else {
      setFilteredData(newFilter)
    }   
  }

    const noResultsMessage = <div>That is not available, please try your search again.</div>


    const filteredCards = filteredData.map((data) => {
      return (
        <div className="article-card">
          <a href={data.url}>
          <h1>{data.title}</h1>
          <h2>{data.byline}</h2>
          <p>{data.abstract}</p>
          </a>
        </div>
      )
    })
      
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
          {filteredData.length > 0 && filteredCards}
          {(filteredData.length === 0 && isSearching) && noResultsMessage}
        </div>
      </div>
    </div>
  )
}

export default SearchForm;

