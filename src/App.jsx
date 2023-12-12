import { useState,useEffect } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { fetchAllArticles } from './api'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ArticleDisplay from './components/ArticleDisplay'
import ArticlesList from './components/ArticlesList'

function App() {
  const [topicFilter, setTopicFilter] = useState()
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchAllArticles(topicFilter).then((foundArticles) => {
      setArticles(foundArticles);
    });
  }, [topicFilter]);

  return (
    <>
     <Header/>
     <NavBar/>
     <main>
      <Routes>
        <Route
            path="/"
            element={<ArticlesList articles={articles} setArticle={setArticle}/>}
        />
        <Route
            path="/articles/:article_id"
            element={<ArticleDisplay article={article}/>}
        />
      </Routes>
    </main>
    </>
  )
}

export default App
