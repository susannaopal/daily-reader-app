import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ title, abstract, id }) => {
  return (
    <div className="article-card">
      <h1>{title}</h1>
      <p>{abstract}</p>
    </div>
  )
}

export default ArticleCard;
