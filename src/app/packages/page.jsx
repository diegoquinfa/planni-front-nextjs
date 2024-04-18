import Container from '@/components/general/Container'
import Banner from '@/components/general/Banner'
import FormTrip from '@/components/form/FormTrip'
import { PackageCard } from '@/components/packages/PackageCard'

export default function Packages() {
  return (
    <Container>
      <Banner src="/img/destino-cartagena.jpg">Cartagena</Banner>
      <FormTrip />
      <h2 className="flex h-full w-full self-start text-4xl font-bold">
        Paquetes
      </h2>
      {/* <div className="md  mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"> */}
      <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <PackageCard key={i} />
        ))}
      </div>
    </Container>
  )
}
