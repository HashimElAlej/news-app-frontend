import { fetchArticleById } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ArticleDisplay({ article, setArticle }) {
  const { article_id } = useParams();
  
  useEffect(() => {
    fetchArticleById((article_id))
    .then((data) => {
      setArticle(data[0])
    })
  }, [article_id]);

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

