import { fetchArticleById,fetchAllComments } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsCard from "./CommentCard";


function ArticleDisplay({ article, setArticle }) {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById((article_id))
      .then((data) => {
        setArticle(data[0])
      })
  }, [article_id]);

  useEffect(() => {
    fetchAllComments((article_id))
      .then((data) => {
        setComments(data)
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

      <div>
        <h3>Comments:</h3>
        {comments.map((comment) => {
          return <CommentsCard key={comment.comment_id} comment={comment} article_id={article_id}/>
        })}
      </div>

    </article>
  );
}

export default ArticleDisplay;

