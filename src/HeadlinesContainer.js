import ArticleCard from './ArticleCard.js';
import './HeadlinesContainer.css';

const ArticlesContainer = ( {headlines} ) => {
  const articleCards = headlines.map((headline, index) => {
    return (
      <ArticleCard 
        title={headline.title}
        byline={headline.byline}
        abstract={headline.abstract}
        id={index}
        key={index}
        url={headline.url}
      />
    )
  })
  return (
    <div className="headlines-container">
      <h2>🗞 Today's Headlines 📰</h2>
      <h5> Click on a headline to read more at the New York Times 👇 </h5>
      {articleCards}
    </div>
  )
}


export default ArticlesContainer;


