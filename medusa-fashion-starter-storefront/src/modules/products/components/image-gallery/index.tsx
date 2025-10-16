import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex w-full">
      <div className="w-[934px] h-[600px] flex flex-col pl-[75px]">
        {images.map((image, index) => (
          <Container
            key={image.id}
            className="relative aspect-[29/34] w-full overflow-hidden rounded-none"
            id={image.id}
          >
            {!!image.url && (
              <Image
                src={image.url}
                priority={index <= 2}
                alt={`Product image ${index + 1}`}
                fill
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
              />
            )}
          </Container>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
