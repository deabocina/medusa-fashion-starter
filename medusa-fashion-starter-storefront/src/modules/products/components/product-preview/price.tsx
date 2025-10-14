import { VariantPrice } from "types/global"

export default function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) return null

  const formatNumber = (value: string) => {
    const number = parseFloat(value.replace(/[^0-9.]/g, ""))
    return `${Math.round(number).toString()}€`
  }

  const calculated = formatNumber(price.calculated_price)
  const original = price.original_price
    ? formatNumber(price.original_price)
    : null

  const isSale = price.price_type === "sale"

  return (
    <div className="flex flex-col justify-start h-[28px]">
      <span
        className={`text-[16px] font-semibold ${
          isSale ? "text-red-600" : "text-black"
        }`}
      >
        {calculated}
      </span>

      {isSale && original && (
        <span className="line-through text-gray-500 mt-[2px]">{original}</span>
      )}
    </div>
  )
}
