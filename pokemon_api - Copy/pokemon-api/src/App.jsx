import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [pokeList, setPokeList] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then((response) => {
        console.log('RESPONSE', response.data.results)
        setPokeList(response.data.results)
        setError('')
      })
      .catch((error) => {
        console.log('ERROR', error)
        setPokeList([])
        setError('Something went wrong')
      })
  }, [])

  return (
    <>
      <h1>Pokemon API</h1>

      <h2>Pokemon:</h2>
      {
        error.length > 0?
        <p>{error}</p>:
        null
      }
      {
        pokeList.map((poke, idx) => (
          <div key={idx}>
            <h3>Pokemon Name: {poke.name}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
