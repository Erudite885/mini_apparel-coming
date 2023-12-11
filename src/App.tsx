import React from 'react'

import RatingComponent from "./components/RatingComponent"

const App: React.FC = () => {
  return (
    <div className='bg-black bg-opacity-95 w-[100vw] h-full'>
        
      <div className='h-full flex justify-center items-center'>
        <RatingComponent />
      </div>
    </div>
  )
}

export default App