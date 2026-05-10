import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const JokeGenerator = () => {
    const [joke, setJoke] = React.useState('')

   function fetchJoke(){
    axios.get('https://official-joke-api.appspot.com/random_joke')
        .then (res => setJoke(res.data.setup + ' ' + res.data.punchline))  
        .catch (err => console.log(err))

   }


    useEffect(() => {
        fetchJoke()
    }, [])
  return (
    <div>
      <p>{joke}</p>
        <button className="btn btn-primary" onClick={fetchJoke}>Get a new joke</button>
    </div>
  )
}

export default JokeGenerator
