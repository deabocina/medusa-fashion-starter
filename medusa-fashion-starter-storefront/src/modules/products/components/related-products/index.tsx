import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import Product from "../product-preview"
import ProductSections from "../product-sections"

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
      <ProductSections />

      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-16">
        <h2 className="text-[24px] md:text-[48px] mb-9 md:mb-12 font-medium text-left">
          Related Products
        </h2>

        <div className="md:hidden flex flex-wrap justify-start w-full gap-x-5">
          {products.slice(0, 2).map((product) => (
            <div
              key={product.id}
              className="w-[calc(50%-0.625rem)] text-[12px] mb-4"
            >
              <Product region={region} product={product} />
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-wrap justify-between w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[390px] text-[12px] md:text-[16px]"
            >
              <Product region={region} product={product} />
              <span className="hidden md:block text-[12px] text-gray-500">
                {product.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
