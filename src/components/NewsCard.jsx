import { useState } from "react";

function NewsCard({ article }) {
  return (
    <>
      <article className='news-card'>
        <div className='picture-icon'>
          <img id='icon' src={article.article_img_url} alt="Football Image" />
        </div>
        <div>
          <h3 id='news-title'>{article.title}</h3>
          <p id='news-paragraph'>{article.body}</p>
          <button>Read More</button>
        </div>
      </article>
    </>
  );
}

export default NewsCard;
