import CartButton from "@modules/layout/components/cart-button"
import { icons } from "assets/assets"

export default async function MobileCart() {
  return (
    <div className="flex md:hidden">
      <a href="/cart">
        <img src={icons.bag.src} alt="Bag" className="w-6 h-6 mr-6" />
      </a>
      <span className="absolute right-8">
        <CartButton />
      </span>
    </div>
  )
}
