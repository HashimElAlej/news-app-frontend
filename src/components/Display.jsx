import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { fetchAllArticles } from "../api";

function Display({ topicFilter }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchAllArticles(topicFilter)
    .then((foundArticles) => {
      setArticles(foundArticles);
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [topicFilter]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='display'>
          {articles.map((article) => (
            <NewsCard key={article.article_id} article={article} />
          ))}
        </div>
      )}
    </>
  );
}

export default Display;