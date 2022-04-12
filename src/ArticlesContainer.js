import React from 'react';
import ArticleCard from './ArticleCard.js';
import './ArticlesContainer.css';

const ArticlesContainer = () => {
  return (
    <div className="articles-container">
      <h2>This is a headline story...</h2>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  )
}

export default ArticlesContainer;