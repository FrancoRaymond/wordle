import React from 'react'

const Line = ({ guess }) => {
    const tiles = []
    const wordLength = 5

    for(let i = 0; i < wordLength; i++){
      const char = guess[i]
      tiles.push(<div className='size-14 border border-black flex gap-1 items-center justify-center text-3xl uppercase font-semibold' key={i}>{char}</div>)
    }

  return (
    <div className='flex gap-1'>
      {tiles}
    </div>
  )
}

export default Line
