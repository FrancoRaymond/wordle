import React from 'react';

const Line = ({ guess, solution }) => {
  const tiles = [];
  const wordLength = 5;

  for (let i = 0; i < wordLength; i++) {
    const char = guess[i] || '';
    let bgColor = 'bg-gray-200'; 

    if (solution && char) {
      if (char === solution[i]) {
        bgColor = 'bg-green-500';
      } else if (solution.includes(char)) {
        bgColor = 'bg-yellow-500'; 
      } else {
        bgColor = 'bg-gray-400'; 
      }
    }

    tiles.push(
      <div
        key={i}
        className={`h-12 w-12 border border-gray-400 flex items-center justify-center text-xl font-bold uppercase ${bgColor} text-white`}
      >
        {char}
      </div>
    );
  }

  return <div className="flex gap-1">{tiles}</div>;
};

export default Line;
