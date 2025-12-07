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


  // TEXT ANIMATION
  const fade = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  // IMAGE ANIMATION
  const imageAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 1 } },
  }

  return (
    <section
      className="relative w-full  h-[600px] md:h-[700px] text-color overflow-hidden"
    >

      {/* Background Image */}
      <img
        src={slides[current].img}
        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-75 transition-all duration-700"
      />

      {/* DARK + GLASS OVERLAY */}
      <div
        className="
          absolute inset-0 
          banner-bg
          backdrop-blur-[6px] 
          border border-white/10
        "
      ></div>

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 overflow-hidden">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
          className="h-full bg-white"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 h-full grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT CONTENT */}
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

          <p className="text-lg md:text-xl text-gray-200">
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

        {/* IMAGE SECTION */}
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
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* CONTROLS */}
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
