import { Suspense } from "react"
import CartButton from "@modules/layout/components/cart-button"
import { icons } from "assets/assets"
import MobileMenu from "./mobile-menu"
import MobileCart from "./mobile-cart"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-white">
      <header className="relative h-16 flex items-center justify-between md:p-8 mx-8">
        <div className="text-[24px] font-medium">
          <a href="/">SofaSocietyCo.</a>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-[16px]">
          <a href="#">About</a>
          <a href="#">Inspiration</a>
          <a href="/store">Shop</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button>
            <img src={icons.lang.src} alt="Language" className="w-10 h-5" />
          </button>
          <button>
            <img src={icons.search.src} alt="Search" className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1 cursor-pointer">
            <a href="/cart">
              <img src={icons.bag.src} alt="Bag" className="w-5 h-5" />
            </a>
            <Suspense fallback={<span className="text-sm">(0)</span>}>
              <CartButton />
            </Suspense>
          </div>
        </div>

        {/* MOBILE PART */}
        <div className="md:hidden flex">
          <Suspense fallback={<span className="text-sm">(0)</span>}>
            <MobileCart />
          </Suspense>
          <MobileMenu />
        </div>
      </header>
    </div>
  )
}
