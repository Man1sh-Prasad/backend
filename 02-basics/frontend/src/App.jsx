import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      // console.log(response)
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }) 
  
  return (
    <>
    <h1>Full Stack</h1>
    <p>Jokes: {jokes.length}</p>

    {
      jokes.map( (joke) => (
        <div key={joke.id}>
          <h3>{joke.question}</h3>
          <h3>{joke.answer}</h3>
        </div>
      ))
    }
    </>
  )
}

export default App
