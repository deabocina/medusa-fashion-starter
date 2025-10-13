import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <div className="flex flex-col">
      {price.price_type === "sale" && (
        <span className="line-through text-black text-[16px]">
          {price.original_price}
        </span>
      )}
      <span
        className={`text-black text-[16px] font-semibold ${
          price.price_type === "sale" ? "text-red-600" : "text-black"
        }`}
      >
        {price.calculated_price}
      </span>
    </div>
  )
}
