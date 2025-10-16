import { Container } from "@medusajs/ui"
import Image from "next/image"
import PlaceholderImage from "@modules/common/icons/placeholder-image"
import React from "react"

type ThumbnailProps = {
  thumbnail?: string | null
  images?: any[] | null
}

const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnail, images }) => {
  const initialImage = thumbnail || images?.[0]?.url

  return (
    <Container
      className="
        relative 
        w-full 
        max-w-[500px]
        aspect-square md:aspect-[3/2]
        overflow-hidden 
        hover:shadow-lg 
        transition-all 
        duration-200 
        bg-white 
        rounded-none
      "
    >
      <ImageOrPlaceholder image={initialImage} />
    </Container>
  )
}

const ImageOrPlaceholder = ({ image }: { image?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className="absolute inset-0 object-fill md:object-cover object-center rounded-none"
      draggable={false}
      quality={70}
      fill
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center rounded-none">
      <PlaceholderImage size={24} />
    </div>
  )
}

export default Thumbnail
