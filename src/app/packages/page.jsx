import Container from '@/components/general/Container'
import Banner from '@/components/general/Banner'
import FormTrip from '@/components/form/FormTrip'

export default function Packages() {
  return (
    <Container>
      <Banner src="/img/destino-cartagena.jpg">Cartagena</Banner>
      <FormTrip />

      <h2 className="flex h-full w-full self-start text-5xl font-bold">
        Paquetes
      </h2>
      {/* <div className="md  mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"> */}
      <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <article
            key={i}
            className="w-full overflow-hidden rounded-xl bg-white"
          >
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/458471254.jpg?k=c53df9a8986d8467d21586bb97b4b9a4cef57ea3f2f06e2f4838d295e9845d33&o=&hp=1"
              alt="img"
              className="aspect-[12/10] h-[75%] w-full object-cover "
            />

            <div className="flex h-fit w-full flex-col justify-between gap-1 p-2">
              <div>
                <h2 className="font-bold text-gray-700">Hotel 1</h2>
                <p className="text-xs font-bold text-gray-400">
                  Cartagena de indias
                </p>
              </div>
              <p className="text-right text-sm font-bold">$ 1.899.999</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}
