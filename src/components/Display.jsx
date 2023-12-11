import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { fetchAllArticles } from "../api";

function Display({ topicFilter }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles(topicFilter).then((foundArticles) => {
      console.log(foundArticles)
      setArticles(foundArticles);
    });
  }, [topicFilter]);

  return (
    <>
      <div className='display'>
        {articles.map((article) => {
          return <NewsCard key={article.article_id} article={article}/>;
        })}
      </div>
    </>
  );
}

export default Display;