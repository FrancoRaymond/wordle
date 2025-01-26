import React, { useState, useEffect } from 'react';
import { words } from '../assets/data/words';
import Line from './Line';

const Wordle = () => {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setSolution(words[Math.floor(Math.random() * words.length)].toUpperCase());
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= 5 && /^[A-Za-z]*$/.test(value)) {
      setCurrentGuess(value);
    }
  };

  const handleSubmit = () => {
    if (currentGuess.length !== 5) {
      alert('Please enter a 5-letter word.');
      return;
    }

    const activeIndex = guesses.findIndex((guess) => guess === null);
    const newGuesses = [...guesses];
    newGuesses[activeIndex] = currentGuess;

    setGuesses(newGuesses);
    setCurrentGuess('');

    if (currentGuess === solution) {
      alert('🎉 You guessed the word!');
      setGameOver(true);
    } else if (activeIndex === 5) {
      alert(`Game Over! The word was: ${solution}`);
      setGameOver(true);
    }
  };

  const handlePlayAgain = () => {
    setGuesses(Array(6).fill(null));
    setCurrentGuess('');
    setSolution(words[Math.floor(Math.random() * words.length)].toUpperCase());
    setGameOver(false);
  };

  return (
    <div className="py-10 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Wordle Game</h1>
      <p className="text-gray-500">Guess the 5-letter word!</p>
      <div className='flex flex-col'>
        <span className='flex'><div className='bg-green-500 h-5 w-5'> </div> = Correct letter in the correct position.</span>
        <span className='flex'><div className='bg-yellow-500 h-5 w-5'> </div> = Correct letter in the wrong position.</span>
        <span className='flex'><div className='bg-gray-400 h-5 w-5'> </div> = Incorrect letter.</span>
      </div>
      <div className="flex flex-col gap-2">
        {guesses.map((guess, i) => (
          <Line
            key={i}
            guess={guess === null ? (i === guesses.findIndex((g) => g === null) ? currentGuess : '') : guess}
            solution={solution}
          />
        ))}
      </div>
      {!gameOver && (
        <div className="flex flex-col gap-2 items-center">
          <input
            type="text"
            value={currentGuess}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 outline-0 rounded-lg text-xl text-center uppercase w-64"
            placeholder="Type your guess"
            maxLength={5}
            autoFocus
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      )}
      {gameOver && (
        <button
          onClick={handlePlayAgain}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default Wordle;