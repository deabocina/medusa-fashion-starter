import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { icons } from "assets/assets"
import NavClient from "./nav-client"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-white">
      <header className="relative h-16 content-container flex items-center justify-between p-2 md:p-10 mx-8">
        <div className="text-[24px] font-medium">
          <LocalizedClientLink href="/">SofaSocietyCo.</LocalizedClientLink>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-[16px]">
          <LocalizedClientLink href="#">About</LocalizedClientLink>
          <LocalizedClientLink href="#">Inspiration</LocalizedClientLink>
          <LocalizedClientLink href="/store">Shop</LocalizedClientLink>
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
        <NavClient />
      </header>
    </div>
  )
}
