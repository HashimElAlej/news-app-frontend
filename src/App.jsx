import React, { useState, useEffect } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { fetchAllArticles } from './api';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleDisplay from './components/ArticleDisplay';
import ArticlesList from './components/ArticlesList';

function App() {
  const [topicFilter, setTopicFilter] = useState();
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); 

    fetchAllArticles(topicFilter)
      .then((foundArticles) => {
        setArticles(foundArticles);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  }, [topicFilter]);

  return (
    <>
      <Header />
      <NavBar />
      <main>
        {isLoading ? (
          <p>Loading...</p> 
        ) : (
          <Routes>
            <Route
              path="/"
              element={<ArticlesList articles={articles} setArticle={setArticle} />}
            />
            <Route
              path="/articles/:article_id"
              element={<ArticleDisplay article={article} setArticle={setArticle} />}
            />
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
