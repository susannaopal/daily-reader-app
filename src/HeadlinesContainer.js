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
      <h3>🗞 Today's Headlines 📰</h3>
      <h4> Click on a headline to read more at the New York Times 👇 </h4>
      <p className='paywall-note'><i>Please note: the New York Times does have a paywall, you can learn about subscription options <u><a href="https://www.nytimes.com/subscription.">here.</a></u></i></p>
      {articleCards}
    </div>
  )
};

{/* <a href="https://www.w3schools.com/">Visit W3Schools.com!</a> */}


export default ArticlesContainer;


