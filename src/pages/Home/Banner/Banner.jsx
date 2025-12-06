import React, { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Garments Production Tracking Made Simple",
      desc: "Easily track orders, monitor production stages, check inventory status, and ensure on-time delivery — all from one smart dashboard.",
      img: "https://i.ibb.co.com/3YkqrjFS/wd-toro-p-Yad-ORv-Vwf-M-unsplash.jpg",
    },
    {
      id: 2,
      title: "Boost Efficiency with Real-Time Monitoring",
      desc: "Stay updated on cutting, sewing, finishing, and shipment stages— all from a single platform.",
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
    {
      id: 3,
      title: "Smarter Inventory Management",
      desc: "Track fabric, accessories, production usage, and warehouse movement with ease.",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, 4000)
    return () => clearTimeout(timer)
  }, [nextSlide])

  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  const imageAnim = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative   w-full bg-gradient-to-r from-[#84C2FF] to-[#C2B3FF] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center transition-all duration-700">
        
        <motion.div
          key={current}
          variants={fade}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {slides[current].title}
          </h1>

          <p className="text-lg md:text-xl text-white/90">
            {slides[current].desc}
          </p>

          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
              View Product
            </button>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Book a Product
            </button>
          </div>
        </motion.div>

        <motion.div
          key={slides[current].img}
          variants={imageAnim}
          initial="hidden"
          animate="show"
          className="flex justify-center"
        >
          <motion.img
            src={slides[current].img}
            alt="Garments Production"
            className="rounded-2xl shadow-lg w-full max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl"
      >
        ❯
      </button>
        </motion.div>


      </div>

    </section>
  )
}

export default Banner
