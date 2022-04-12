import React from 'react';
import ArticleCard from './ArticleCard.js';
import './HeadlinesContainer.css';

const ArticlesContainer = ( {headlines} ) => {
  const articleCards = headlines.map(headline => {
    return (
      <ArticleCard 
        title={headline.title}
        abstract={headline.abstract}
        id={headline.id}
        key={headline.id}
      />

    )
  })
  return (
    <div className="headlines-container">
      <h1>Headlines</h1>
      {articleCards}
    </div>
  )
}

export default ArticlesContainer;
