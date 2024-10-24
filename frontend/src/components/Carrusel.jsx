import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  '/images/carrusel1.png',
  '/images/carrusel2.png',
  '/images/carrusel3.png',
]

export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative h-[400px] w-full max-w-[1400px] m-auto py-4 px-4 group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
      {/* Navigation dots */}
      <div className="flex top-4 justify-center py-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-400'
            }`}
          >
            •
          </div>
        ))}
      </div>
    </div>
  )
}
