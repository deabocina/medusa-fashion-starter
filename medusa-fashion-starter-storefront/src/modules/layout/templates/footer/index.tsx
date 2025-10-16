import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Footer() {
  return (
    <footer className="bg-lightGrey w-full">
      <div className="py-10 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[168px_600px_auto] gap-3 justify-center">
          <div className="flex flex-col justify-between order-2 md:order-1 px-10 md:px-0 mt-14 md:mt-0 mb-6 md:mb-0">
            <div className="leading-[220%] md:leading-[250%]">
              <LocalizedClientLink
                href="/"
                className="text-[32px] md:text-[40px] font-medium tracking-tight block mb-1"
              >
                <span className="block">Sofa</span>
                <span className="block">Society</span>
                <span className="block">Co.</span>
              </LocalizedClientLink>
            </div>
            <div className="text-[12px] md:text-[13px] mb-3">
              © 2024, Sofa Society
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 md:gap-16 text-[12px] md:text-[16px] md:ml-40 order-3 md:order-2 px-10 md:px-0">
            <div className="flex flex-col gap-y-5 md:gap-y-4">
              <a href="#">FAQ</a>
              <a href="#">Help</a>
              <a href="#">Delivery</a>
              <a href="#">Returns</a>
            </div>

            <div className="flex flex-col gap-y-5 md:gap-y-4">
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
              <a href="#">Pinterest</a>
              <a href="#">Facebook</a>
            </div>

            <div className="flex flex-col gap-y-5 md:gap-y-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>

          <div className="flex flex-col gap-1 ml-10 md:ml-32 md:max-w-[450px] order-1 md:order-3 mr-10 md:mr-0">
            <h4 className="text-[24px] md:text-[32px] font-medium">
              Join our newsletter
            </h4>
            <p className="text-[12px] md:text-[16px]">
              We will also send you our discount coupons!
            </p>

            <form className="flex items-center gap-2 mt-2 text-[12px] w-full md:w-[400px]">
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

            <p className="text-[12px] text-grey mt-2 w-full md:w-[384px]">
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
