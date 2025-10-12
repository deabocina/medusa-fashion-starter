import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { icons } from "assets/assets"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-white">
      <header className="relative h-16 mx-auto content-container flex items-center justify-between p-10">
        <div className="text-[24px] font-medium">
          <LocalizedClientLink href="/" data-testid="nav-store-link">
            SofaSocietyCo.
          </LocalizedClientLink>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 text-[16px]">
          <LocalizedClientLink href="#" className="hover:opacity-70 transition">
            About
          </LocalizedClientLink>
          <LocalizedClientLink href="#" className="hover:opacity-70 transition">
            Inspiration
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/store"
            className="hover:opacity-70 transition"
          >
            Shop
          </LocalizedClientLink>
        </div>

        <div className="flex items-center gap-5">
          <button className="hover:opacity-70 transition">
            <img
              src={icons.lang.src}
              alt="Language"
              className="w-10 h-10 object-contain"
            />
          </button>

          <button className="hover:opacity-70 transition">
            <img
              src={icons.search.src}
              alt="Search"
              className="w-5 h-5 object-contain"
            />
          </button>

          <img
            src={icons.bag.src}
            alt="Bag"
            className="w-5 h-5 object-contain"
          />

          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:opacity-70 flex items-center gap-1"
                href="/cart"
                data-testid="nav-cart-link"
              >
                <span className="text-sm">(0)</span>
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
        </div>
      </header>
    </div>
  )
}
