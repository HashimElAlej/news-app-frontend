import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Display from './components/Display'

function App() {
  const [topicFilter, setTopicFilter] = useState()

  return (
    <>
     <Header/>
     <NavBar/>
     <Display topicFilter={topicFilter}/>
    </>
  )
}

export default App
