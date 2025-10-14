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

  return (
    <div className="flex flex-col">
      {price.price_type === "sale" && original && (
        <span className="line-through text-black text-[16px]">{original}</span>
      )}
      <span
        className={`text-black text-[16px] font-semibold ${
          price.price_type === "sale" ? "text-red-600" : "text-black"
        }`}
      >
        {calculated}
      </span>
    </div>
  )
}
