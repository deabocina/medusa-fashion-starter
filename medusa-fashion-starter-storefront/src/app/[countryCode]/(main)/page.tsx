import StoreTemplate from "@modules/store/templates"
import { getRegion } from "@lib/data/regions"
import { listCollections } from "@lib/data/collections"

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)
  const { collections } = await listCollections({ fields: "id, handle, title" })

  if (!collections || !region) return null
  const page = 1

  return <StoreTemplate page={page.toString()} countryCode={countryCode} />
}
