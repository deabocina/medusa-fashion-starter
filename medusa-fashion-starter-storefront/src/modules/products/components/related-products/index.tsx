import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import Product from "../product-preview"
import Image from "next/image"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // edit this function to define your related products logic
  const queryParams: HttpTypes.StoreProductListParams = {}
  if (region?.id) {
    queryParams.region_id = region.id
  }
  if (product.collection_id) {
    queryParams.collection_id = [product.collection_id]
  }
  if (product.tags) {
    queryParams.tag_id = product.tags
      .map((t) => t.id)
      .filter(Boolean) as string[]
  }
  queryParams.is_giftcard = false

  const products = await listProducts({
    queryParams,
    countryCode,
  }).then(({ response }) => {
    return response.products.filter(
      (responseProduct) => responseProduct.id !== product.id
    )
  })

  if (!products.length) {
    return null
  }

  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto mb-10 px-6 md:mb-16">
        <h2 className="text-[24px] md:text-[48px] mb-6 md:mb-10 font-medium text-left">
          Collection Inspired Interior
        </h2>

        <Image
          src="/images/img1.png"
          alt="Collection inspired"
          width={1248}
          height={702}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="relative w-full overflow-hidden mb-10 md:mb-16">
        <Image
          src="/images/img2.png"
          alt="Sofa example"
          width={1440}
          height={809}
          className="w-full object-cover"
          priority
        />
      </div>

      <div className="w-full flex flex-col md:flex-row max-w-[1440px] mx-auto px-6 md:px-16 mb-16 md:mb-16">
        <Image
          src="/images/img3.png"
          alt="The Paloma Haven sofa"
          width={492}
          height={656}
          className="object-cover w-full md:w-[492px] h-auto"
        />
        <div className="mt-8 md:mt-16 md:ml-24 mb-10 text-left">
          <h2 className="text-[28px] md:text-[48px] mb-6 md:mb-8 font-medium">
            The Paloma Haven sofa is a masterpiece of minimalism and luxury.
          </h2>
          <a
            href="#"
            className="border-b-2 border-black text-[20px] md:text-[24px] hover:opacity-40 transition cursor-pointer"
          >
            See more out of ‘Modern Luxe’ collection
          </a>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto md:px-16">
        <h2 className="text-[32px] md:text-[48px] mb-6 md:mb-16 font-medium text-left">
          Related Products
        </h2>

        <div className="flex flex-wrap justify-center md:justify-between w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[290px] md:w-[390px] text-[14px] md:text-[16px]"
            >
              <Product region={region} product={product} />
              <span className="text-[12px] text-gray-500">
                {product.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
