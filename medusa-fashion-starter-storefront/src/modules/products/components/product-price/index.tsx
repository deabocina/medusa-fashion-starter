import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
}: {
  product: HttpTypes.StoreProduct
}) {
  const { cheapestPrice } = getProductPrice({ product })

  if (!cheapestPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  const calculated = Math.round(
    parseFloat(
      cheapestPrice.calculated_price_number || cheapestPrice.calculated_price
    )
  )
  const original = Math.round(
    parseFloat(
      cheapestPrice.original_price_number || cheapestPrice.original_price
    )
  )

  return (
    <div className="flex flex-col text-black">
      <span
        className={`text-[24px] ${
          cheapestPrice.price_type === "sale" ? "text-red-600" : ""
        }`}
        data-testid="product-price"
      >
        €{calculated}
      </span>

      {cheapestPrice.price_type === "sale" && (
        <span
          className="line-through text-gray-500 text-[16px]"
          data-testid="original-product-price"
        >
          €{original}
        </span>
      )}
    </div>
  )
}
