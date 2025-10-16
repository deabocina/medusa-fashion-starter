import Image from "next/image"

export default function ProductSections() {
  return (
    <>
      <div className="w-full max-w-[1430px] mb-10 px-5 md:px-16 md:mb-16 mx-auto">
        <h2 className="text-[24px] md:text-[48px] mb-10 font-medium text-left">
          Collection Inspired Interior
        </h2>

        <Image
          src="/images/img1.png"
          alt="Collection inspired"
          width={1248}
          height={702}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="relative w-full overflow-hidden px-5 md:px-0 mb-10 md:mb-16">
        <Image
          src="/images/img2.png"
          alt="Sofa example"
          width={1440}
          height={809}
          className="w-full object-cover"
          priority
        />
      </div>

      <div className="flex flex-col md:flex-row max-w-[1430px] px-5 md:px-16 mb-16 md:mb-32 md:mx-auto">
        <Image
          src="/images/img3.png"
          alt="The Paloma Haven sofa"
          width={492}
          height={656}
          className="object-cover w-4/6 md:w-[492px] h-auto"
        />
        <div className="mt-8 md:mt-16 md:ml-24 mb-10 text-left md:flex-1">
          <h2 className="text-[24px] md:text-[48px] mb-6 md:mb-8 font-medium">
            The Paloma Haven sofa is a masterpiece of minimalism and luxury.
          </h2>
          <a
            href="#"
            className="border-b border-black text-[16px] md:text-[24px] hover:opacity-40 transition cursor-pointer inline-block"
          >
            See more out of ‘Modern Luxe’ collection
          </a>
        </div>
      </div>
    </>
  )
}
