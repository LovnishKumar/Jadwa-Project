import React from 'react'
import Slider from './Slider'
import Navbar from './Navbar'
import Card from './Card'

const Blogs = () => {
  return (
    <div className="h-screen flex flex-col">
    <Navbar />
    <div className="flex flex-1">
      <Slider />
     <div className="grid w-fit grid-cols-12 p-5">
     <div className='flex col-span-3'>
     <Card/>
     </div>
     </div>
    </div>
  </div>
  )
}

export default Blogs