function CommentsCard({ comment }) {
    return (
      <>
        <article className='news-card'>
        <div>
          <h3 id='box-title'>{comment.author}</h3>
          <p id='box-paragraph'>{comment.body}</p>
        </div>
      </article>
      </>
    );
  }
  
export default CommentsCard;