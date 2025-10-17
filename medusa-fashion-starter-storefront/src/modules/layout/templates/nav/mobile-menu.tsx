"use client"

import { useState } from "react"
import { icons } from "assets/assets"

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="flex md:hidden items-center gap-8 md:gap-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img src={icons.menu.src} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-start p-4 absolute right-0 top-16 w-full">
          <a href="#" className="py-2 w-full text-left">
            About
          </a>
          <a href="#" className="py-2 w-full text-left">
            Inspiration
          </a>
          <a href="/store" className="py-2 w-full text-left">
            Shop
          </a>
        </div>
      )}
    </>
  )
}
