import { HttpTypes } from "@medusajs/types"
import ProductPrice from "@modules/products/components/product-price"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div>
      <div className="flex flex-col mx-auto">
        <span className="text-grey text-[16px] mb-1"> {product.subtitle}</span>

        <h3 className="text-[40px] font-medium">{product.title}</h3>
        <ProductPrice product={product} />

        <p className="mt-8 w-[481px]">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductInfo
