import NewsCard from "./NewsCard";

function ArticlesList({ articles, setArticle}) {
    return (
        <div className='display'>
            {articles.map((article) => {
                return <NewsCard key={article.article_id} article={article} setArticle={setArticle} />;
            })}
        </div>
    );
}



export default ArticlesList;
