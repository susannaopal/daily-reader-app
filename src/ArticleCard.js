import './ArticleCard.css';

const ArticleCard = ({ title, abstract, byline, url }) => {
  return (
    <div className="article-card">
      <a href={url}>
      <h3>{title}</h3>
      <h4>{byline}</h4>
      <p>{abstract}</p>
      </a>
    </div>
  )
}

export default ArticleCard;
