import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Footer() {
  return (
    <footer className="bg-lightGrey w-full">
      <div className="content-container px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col justify-between">
            <div className="leading-[250%]">
              <LocalizedClientLink
                href="/"
                className="text-[40px] font-medium tracking-tight block"
              >
                <span className="block">Sofa</span>
                <span className="block">Society</span>
                <span className="block">Co.</span>
              </LocalizedClientLink>
            </div>
            <div className="text-[13px] mb-2">© 2024, Sofa Society</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-[16px]">
            <div className="flex flex-col gap-y-2">
              <a href="#">FAQ</a>
              <a href="#">Help</a>
              <a href="#">Delivery</a>
              <a href="#">Returns</a>
            </div>

            <div className="flex flex-col gap-y-2">
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
              <a href="#">Pinterest</a>
              <a href="#">Facebook</a>
            </div>

            <div className="flex flex-col gap-y-2">
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-[32px] font-medium">Join our newsletter</h4>
            <p className="text-[16px]">
              We will also send you our discount coupons!
            </p>

            <form className="flex items-center gap-2 mt-2 text-[12px]">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md px-4 py-2 outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md text-[14px] hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>

            <p className="text-[12px] text-grey mt-2">
              By subscribing you agree to with our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and provide consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
