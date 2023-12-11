import React, { useState } from 'react'
// import Thankyou from './Thankyou'

const RatingComponent: React.FC = () => {
 
  return (
    <div className='bg-gray-800 rounded-2xl mx-4 p-6'>
      <div className='flex flex-col'>
        <div className='bg-gray-500 bg-opacity-25 rounded-full w-12 h-12 mb-4 flex justify-center items-center'>
          <img src="../../public/vite.svg" alt="rating_star-logo" className='w-6 h-6 object-contain'  />
        </div>
        <h2 className='font-bold text-xl md:text-2xl text-slate-200 py-2'>How did we do?</h2>
        <p className='text-sm md:text-lg text-slate-400 mb-4'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className=''>{[1, 2, 3, 4, 5].map((value) => (
          <button key={value} className='text-xs sm:text-sm md:text-base m-1 bg-gray-900 bg-opacity-70 text-slate-400 rounded-full hover:border-none hover:bg-slate-400 hover:text-slate-200 active:bg-orange-500 active:text-slate-200 focus:outline-none '>{value}</button>
        ))}
        </div>
        <button className='px-4 py-2 bg-orange-600 text-white border-none focus:outline-[0] hover:bg-slate-50 hover:text-orange-500 active:bg-slate-50 active:text-orange-500 mt-5 uppercase tracking-widest rounded-3xl'>Submit</button>
      </div>
    </div>
  )
}

export default RatingComponent