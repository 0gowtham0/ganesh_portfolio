import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Mail, Phone, Instagram } from 'lucide-react'

const images = [
  '/placeholder.svg?height=600&width=800',
  '/placeholder.svg?height=600&width=800',
  '/placeholder.svg?height=600&width=800',
  '/placeholder.svg?height=600&width=800',
  '/placeholder.svg?height=600&width=800',
]

export default function PhotographerPortfolio() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-12 text-center">
        <h1 className="text-5xl font-bold tracking-wider">GANESH</h1>
        <p className="mt-3 text-xl text-gray-400">Photographer</p>
      </header>

      <div className="relative mx-auto max-w-5xl">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-2xl">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="object-cover w-full h-full transition-opacity duration-500"
          />
        </div>
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <img src={image} alt={`Gallery ${index + 1}`} className="object-cover w-full h-full rounded-lg shadow-md hover:opacity-80 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-zinc-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact</h2>
          <div className="flex flex-col items-center space-y-4">
            <a href="mailto:ganesh@example.com" className="flex items-center space-x-3 hover:text-gray-300 transition-colors">
              <Mail className="w-5 h-5" />
              <span>ganesh@example.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-3 hover:text-gray-300 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="https://instagram.com/ganesh" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-gray-300 transition-colors">
              <Instagram className="w-5 h-5" />
              <span>@ganesh</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}