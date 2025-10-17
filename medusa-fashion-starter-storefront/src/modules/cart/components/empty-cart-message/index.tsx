import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 md:px-8 flex flex-col justify-center items-center">
      <p className="mt-4 mb-6 max-w-[32rem]">
        You don't have anything in your cart. Let's change that, use the link
        below to start browsing our products.
      </p>
      <div>
        <InteractiveLink href="/store">Explore products</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
