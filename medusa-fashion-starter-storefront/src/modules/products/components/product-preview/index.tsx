import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`}>
      <div>
        <Thumbnail thumbnail={product.thumbnail} images={product.images} />
        <div className="flex flex-col md:flex-row mt-4 justify-between md:items-center">
          <span className="text-[12px] md:text-[16px] font-normal order-1">
            {product.title}
          </span>

          {cheapestPrice && (
            <div className="order-2 mt-1 md:mt-0">
              <PreviewPrice price={cheapestPrice} />
            </div>
          )}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
