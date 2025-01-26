import React,{ useState, useEffect } from 'react'
import { words } from '../assets/data/words'
import Line from './Line'

const Wordle = () => {
    const [solution, setSolution] = useState('')
    const [guesses, setGuesses] = useState(Array(6).fill(null))
    const [currentGuess, setCurrentGuess] = useState('')
    


    useEffect(() => {
        setSolution(words[Math.floor(Math.random() * words.length)])
    }, [])

    useEffect(() => {
      const handleType = (e) => {
        setCurrentGuess(oldGuess => oldGuess + e.key)
      }
      window.addEventListener('keydown', handleType)

      return () => window.removeEventListener('keydown', handleType)

    },[])

  return (
    <div className='mt-10 flex gap-1 flex-col'>
      {
        guesses.map((guess, i) => {
          const isCurrentGuess = i === guesses.findIndex(val => val == null)
          return (
            <Line key={i} guess={isCurrentGuess ? currentGuess : guess ?? ''} />  
          )
        })
      } 
    </div>
  )
}

export default Wordle