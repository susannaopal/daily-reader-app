import React from 'react';
import ArticleCard from './ArticleCard.js';
import './HeadlinesContainer.css';

const ArticlesContainer = ( {headlines} ) => {
  const articleCards = headlines.map(headline => {
    return (
      <ArticleCard 
        title={headline.title}
        byline={headline.byline}
        abstract={headline.abstract}
        id={headline.id}
        key={headline.id}
        url={headline.url}
      />

    )
  })
  return (
    <div className="headlines-container">
      <h3>Today's Headlines</h3>
      {articleCards}
    </div>
  )
}

export default ArticlesContainer;
