"use client"

import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { icons } from "assets/assets"

export default function NavClient() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="flex md:hidden items-center gap-8 md:gap-4">
        <a href="/cart">
          <img src={icons.bag.src} alt="Bag" className="w-6 h-6" />
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img src={icons.menu.src} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-start p-4 absolute right-0 top-16 w-full">
          <LocalizedClientLink href="#" className="py-2 w-full text-left">
            About
          </LocalizedClientLink>
          <LocalizedClientLink href="#" className="py-2 w-full text-left">
            Inspiration
          </LocalizedClientLink>
          <LocalizedClientLink href="/store" className="py-2 w-full text-left">
            Shop
          </LocalizedClientLink>
        </div>
      )}
    </>
  )
}
