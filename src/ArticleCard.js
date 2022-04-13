import React from 'react';
import './ArticleCard.css';


const ArticleCard = ({ title, abstract, byline, url, id }) => {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <h4>{byline}</h4>
      <p>{abstract}</p>
      <a href={url}>
        <button>Read More</button>
</a>
    </div>
  )
}

export default ArticleCard;
