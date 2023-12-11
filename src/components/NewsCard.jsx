import { useState } from "react";

{/* <header className='display-header'>
                <h2>Top Headlines:</h2>
            </header> */}

function NewsCard({ article }) {
    return (
        <>
            <article className='news-card'>
                <h3 id='news-title'>{article.title}</h3>
                <p id='news-paragraph'>{article.body}</p>
                {/* <img id='football' src={article.article_img_url} alt="Football Image"/> */}
                <button>Read More</button>
            </article>
        </>
    );
}

export default NewsCard;
