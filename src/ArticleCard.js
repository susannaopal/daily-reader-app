import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ title, abstract, byline, id }) => {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <h4>{byline}</h4>
      <p>{abstract}</p>
      <button>Read More</button>
    </div>
  )
}

export default ArticleCard;
