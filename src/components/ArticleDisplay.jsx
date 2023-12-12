import { fetchArticleById } from "../api";
import { useEffect } from "react";

function ArticleDisplay({ article }) {

  

  return (
    <article className='article'>

      <div className='white-title'>
        <h3> {article.title} </h3>
      </div>

      <div className='white-background'>
       <p>Author: {article.author}</p>
       <p>Date: {article.created_at}</p>
      </div>

      <img id='icon-2' src={article.article_img_url} alt="Football Image" />

      <div className='white-background'>
        <p>{article.body}</p>
      </div>

    </article>
  );
}

export default ArticleDisplay;