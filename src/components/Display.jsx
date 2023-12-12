import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticlesList from "./ArticlesList";
import ArticleDisplay from "./ArticleDisplay";
import { fetchAllArticles } from "../api";

function Display({ topicFilter }) {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchAllArticles(topicFilter).then((foundArticles) => {
      setArticles(foundArticles);
    });
  }, [topicFilter]);

  return (
    <main>
      <Routes>
        <Route
            path="/"
            element={<ArticlesList articles={articles} setArticle={setArticle}/>}
        />
        <Route
            path="/articles/:article_id"
            element={<ArticleDisplay article={article} setArticle={setArticle}/>}
        />
      </Routes>
    </main>
  );
}

export default Display;