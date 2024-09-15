import React from 'react'
import Frame1 from '../assets/Frame.png'

const Card = () => {
  return (
    <div class="rounded h-fit overflow-hidden shadow-2xl">
  <img class="m-auto py-10" width={'120px'} src={Frame1} alt="Company"/>
  <div class="px-6 py-4">
    <div class="font-medium text-base mb-2">Company</div>
    <p class=" text-sm text-gray-400">
    Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas pretium tempor odio sed
    </p>
  </div>
  <div class="px-2 text-gray-400">
    <span class="inline-block px-3 py-1 text-sm font-semibold">time</span>
    
  </div>
</div>
  )
}

export default Card