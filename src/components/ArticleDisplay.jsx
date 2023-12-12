function ArticleDisplay({article}) {
    console.log(article)
    return (
      <article className='article'>
          <img id='icon-2' src={article.article_img_url} alt="Football Image" />
        <div className='white-background'>
          <h3> {article.title} </h3>
          <p>{article.body}</p>
        </div>
      </article>
    );
  }
  
  export default ArticleDisplay;