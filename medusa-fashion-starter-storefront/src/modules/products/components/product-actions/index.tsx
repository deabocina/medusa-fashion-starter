"use client"

import { addToCart } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import OptionSelect from "@modules/products/components/product-actions/option-select"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

type ProductActionsProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  disabled?: boolean
}

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function ProductActions({
  product,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [isAdding, setIsAdding] = useState(false)
  const countryCode = useParams().countryCode as string
  const [quantity, setQuantity] = useState(1)

  const increaseQty = () => setQuantity((q) => Math.min(q + 1, 99))
  const decreaseQty = () => setQuantity((q) => Math.max(q - 1, 1))

  // If there is only 1 variant, preselect the options
  useEffect(() => {
    if (product.variants?.length === 1) {
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      setOptions(variantOptions ?? {})
    }
  }, [product.variants])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // update the options when a variant is selected
  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  //check if the selected options produce a valid variant
  const isValidVariant = useMemo(() => {
    return product.variants?.some((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant?.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [selectedVariant])

  const actionsRef = useRef<HTMLDivElement>(null)

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: selectedVariant.id,
      quantity,
      countryCode,
    })

    setIsAdding(false)
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col" ref={actionsRef}>
        <div>
          {[...(product.options || [])]
            .sort((a, b) => {
              if (a.title?.toLowerCase().includes("material")) return -1
              if (b.title?.toLowerCase().includes("material")) return 1
              return 0
            })
            .map((option) => (
              <div key={option.id}>
                <OptionSelect
                  option={option}
                  current={options[option.id]}
                  updateOption={setOptionValue}
                  title={option.title ?? ""}
                  disabled={!!disabled || isAdding}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="md:flex mt-2 md:mt-16 gap-3 px-5 md:px-0">
        <div className="flex items-center justify-between border border-gray rounded-[4px] w-full md:w-[110px] h-10 px-32 md:px-3">
          <button
            type="button"
            onClick={decreaseQty}
            className={`text-[24px] px-2 transition ${
              quantity <= 1 ? "text-gray-300 cursor-not-allowed" : "text-black"
            }`}
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="text-base select-none">{quantity}</span>
          <button
            type="button"
            onClick={increaseQty}
            className={`text-[24px] px-2 transition ${
              quantity > 99 ? "text-gray-300 cursor-not-allowed" : "text-black"
            }`}
          >
            +
          </button>
        </div>

        <Button
          onClick={handleAddToCart}
          variant="primary"
          className="w-full md:w-[388px] h-10 font-normal text-[16px] rounded-[4px] mt-4 md:mt-0"
          isLoading={isAdding}
        >
          {isAdding
            ? "Adding..."
            : !selectedVariant && !options
            ? "Select variant"
            : !isValidVariant
            ? "Unavailable"
            : "Add to cart"}
        </Button>
      </div>

      <p className="text-gray-500 mt-3 text-[16px] px-5 md:px-0">
        Estimate delivery 2-3 days
      </p>
    </div>
  )
}
