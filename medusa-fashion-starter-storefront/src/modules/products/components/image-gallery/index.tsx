"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { useRef, useState } from "react"
import { icons } from "assets/assets"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  if (!images?.length) return null

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const newIndex =
      direction === "left"
        ? Math.max(activeImageIndex - 1, 0)
        : Math.min(activeImageIndex + 1, images.length - 1)

    const { clientWidth } = scrollRef.current
    scrollRef.current.scrollTo({
      left: newIndex * clientWidth * 0.9,
      behavior: "smooth",
    })

    setActiveImageIndex(newIndex)
  }

  return (
    <div className="w-full relative">
      {/* MOBILE */}
      <div className="md:hidden relative w-full aspect-[5/6] overflow-hidden -mt-6">
        <Image
          src={images[activeImageIndex].url}
          alt={`Product image ${activeImageIndex + 1}`}
          fill
          className="object-cover"
        />

        {/* MOBILE PAGINATION */}
        <div className="absolute bottom-5 flex left-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`w-4 h-7 flex justify-start items-center border-b-2 ${
                activeImageIndex === index
                  ? "border-black"
                  : "border-transparent"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative pl-16">
        <button
          onClick={() => scroll("left")}
          className="absolute left-20 top-1/2 -translate-y-1/2 z-10 p-2 hover:opacity-70 transition-opacity duration-300"
        >
          <Image src={icons.arrowLeft} alt="Previous" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 hover:opacity-70 transition-opacity duration-300"
        >
          <Image src={icons.arrowRight} alt="Next" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-3 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-[460px] h-[580px] relative rounded-none overflow-hidden"
            >
              <Image
                src={image.url}
                alt={`Product image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 700px"
              />
            </div>
          ))}
        </div>

        {/* DESKTOP PAGINATION */}
        <div className="flex absolute md:right-44 md:mt-4 md:gap-2">
          <button
            onClick={() => scroll("left")}
            className={`w-4 h-6 flex justify-start items-center ${
              activeImageIndex === 0 ? "border-b border-black" : "border-none"
            }`}
          >
            1
          </button>
          <button
            onClick={() => scroll("right")}
            className={`w-4 h-6 flex justify-start items-center ${
              activeImageIndex === 1 ? "border-b border-black" : "border-none"
            }`}
          >
            2
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
