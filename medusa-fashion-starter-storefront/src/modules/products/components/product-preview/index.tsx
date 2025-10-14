import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
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
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
        />
        <div className="flex mt-4 justify-between items-center">
          <span className="text-[16px] font-normal">{product.title}</span>
          {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
