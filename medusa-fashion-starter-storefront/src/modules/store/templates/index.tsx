import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  page,
  countryCode,
}: {
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="px-4 py-6 sm:px-6 md:px-10">
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <div className="w-full md:w-3/4">
          <div className="mb-6 text-2xl font-semibold">Shop</div>
          <PaginatedProducts page={pageNumber} countryCode={countryCode} />
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
