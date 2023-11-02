import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h3 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center py-10 text-gray-600'>Image Gallery</h3>


  <div className='max-w-[1700px] mx-auto md:px-12 px-5 '>
    <ImageGallery/>
  </div>
    </>
  )
}

export default App
