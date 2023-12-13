import { fetchAllComments, fetchArticleById } from "../api";
import { useState, useEffect } from "react";
import CommentsCard from "./CommentCard";
import { useParams } from "react-router-dom";


function ArticleDisplay({ article, setArticle }) {

  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchAllComments((article_id))
    .then((data) => {
      setComments(data)
    })
  }, [article_id]);

  useEffect(() => {
    fetchArticleById((article_id))
    .then((data) => {
      setArticle(data[0])
    })
  }, [article_id]);

  return (
    <div className='article'>
      <article>
        <img id='icon-2' src={article.article_img_url} alt="Football Image" />
        <div className='white-background'>
          <h3> {article.title} </h3>
          <p>{article.body}</p>
        </div>
      </article>
      <div>
        <h3>Comments:</h3>
        {comments.map((comment) => {
          return <CommentsCard key={comment.comment_id} comment={comment}/>
        })}
      </div>
    </div>
  );
}

export default ArticleDisplay;

