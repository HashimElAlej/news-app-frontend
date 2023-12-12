import { useState, useEffect } from "react";
import { postVote } from "../api";


function CommentsCard({ comment , article_id}) {

    console.log(article_id)

    const [commentVotes, setCommentVotes] = useState(comment.votes);

    useEffect(() => {
        console.log(article_id)
        postVote(article_id, comment.comment_id, { commentVotes })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error updating comment votes:', error);
          });
      }, [article_id, comment.comment_id, commentVotes]);


    function handleLikeComment() {
        const updatedVotes = commentVotes + 1
        setCommentVotes(updatedVotes)
    }

    function handleDislikeComment() {
        const updatedVotes = commentVotes - 1
        setCommentVotes(updatedVotes)
    }

    return (
        <>
            <article className='news-card'>
                <div>
                    <h3 id='box-title'>{comment.author}</h3>
                    <p id='box-paragraph'>{comment.body}</p>
                    <p className='comment-votes'>Like Post<button onClick={handleLikeComment}>+1</button>Dislike Post<button onClick={handleDislikeComment}>-1</button></p>
                    <p>Votes: {commentVotes}</p>
                </div>
            </article>
        </>
    );
}

export default CommentsCard;