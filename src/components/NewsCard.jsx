import { useState } from "react";
import { Link } from "react-router-dom";

function NewsCard({ article, setArticle }) {

    function openArticlePage(article) {
        setArticle(article)
    }

  return (
    <>
      <article className='news-card'>
        <div className='picture-icon'>
          <img id='icon' src={article.article_img_url} alt="Football Image" />
        </div>
        <div>
          <h3 id='news-title'>{article.title}</h3>
          <p id='news-paragraph'>{article.body}</p>
          <Link to={`/articles/${article.article_id}`}>
            <button onClick={() => openArticlePage(article)}>Read More</button>
          </Link>
        </div>
      </article>
    </>
  );
}

export default NewsCard;
