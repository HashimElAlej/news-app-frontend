import { useState, useEffect } from "react";
import { patchVote } from "../api";


function CommentsCard({ comment }) {

    const [commentVotes, setCommentVotes] = useState(comment.votes);
    const [toggleVote, setToggleVote] = useState()
    const [isClickedLike, setIsClickedLike] = useState(false);
    const [isClickedDislike, setIsClickedDislike] = useState(false);

    function handleLikeComment() {
        if (toggleVote != 'like') {
            setIsClickedLike(true)
            setIsClickedDislike(false)
            setToggleVote('like')
            setCommentVotes(commentVotes + 1)
            const updatedVotes = 1
            updateCommentVotes(comment.comment_id, updatedVotes);
        }
    }

    function handleDislikeComment() {
        if (toggleVote != 'dislike') {
            setIsClickedDislike(true)
            setIsClickedLike(false)
            setToggleVote('dislike')
            setCommentVotes(commentVotes - 1)
            const updatedVotes = -1
            updateCommentVotes(comment.comment_id, updatedVotes);
        }
    }

    const updateCommentVotes = (commentId, updatedVotes) => {
        patchVote(commentId, updatedVotes )
          .then((data) => {
          })
          .catch((error) => {
            console.error('Error updating comment votes:', error);
          });
      };

    const buttonStyleLike = {
        backgroundColor: isClickedLike ? 'green' : 'white',
        color: 'white',
        cursor: 'pointer',
    };

    const buttonStyleDislike = {
        backgroundColor: isClickedDislike ? 'green' : 'white',
        color: 'white',
        cursor: 'pointer',
    };

    return (
        <>
            <article className='news-card'>
                <div>
                    <h3 id='box-title'>{comment.author}</h3>
                    <p id='box-paragraph'>{comment.body}</p>
                    <p className='comment-votes'>Like Post<button style={buttonStyleLike} onClick={handleLikeComment}>+1</button>Dislike Post<button style={buttonStyleDislike} onClick={handleDislikeComment}>-1</button></p>
                    <p>Votes: {commentVotes}</p>
                </div>
            </article>
        </>
    );
}

export default CommentsCard;