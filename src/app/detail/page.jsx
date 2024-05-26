import Container from '@/components/general/Container'

const Page = () => {
  return (
    <Container>
      <div className="flex w-auto flex-col items-center gap-4">
        <h1 className="text-3xl font-bold sm:text-5xl ">Hotel 1</h1>
        <div className="grid w-full grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
          <img
            className="col-span-2 h-full w-full rounded-lg object-cover md:col-span-2 md:row-span-2"
            src="img\destino-cartagena.jpg"
            alt="destino"
          />
          <img
            className="row-span-1 h-full w-full rounded-lg object-cover md:col-span-1"
            src="img\destino-cartagena.jpg"
            alt="destino"
          />
          <img
            className="row-span-1 h-full w-full rounded-lg object-cover md:row-span-1"
            src="img\destino-cartagena.jpg"
            alt="destino"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
          <p className="sm:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            similique in exercitationem qui eos placeat quae saepe deserunt
            necessitatibus illo officia ex ipsam natus asperiores voluptas at
            perspiciatis, laboriosam dolores? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Alias similique in exercitationem qui
            eos placeat quae saepe deserunt necessitatibus illo officia ex ipsam
            natus asperiores voluptas at perspiciatis, laboriosam dolores?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            similique in exercitationem qui eos placeat quae saepe deserunt
            necessitatibus illo officia ex ipsam natus asperiores voluptas at
            perspiciatis, laboriosam dolores?
          </p>
          <div className="grid items-center gap-2 rounded-lg bg-white p-4">
            <p className="text-xl font-bold">KAYAK</p>
            <h2 className="text-4xl font-bold">$ 1.320.000</h2>
            <p className="text-xl font-bold">incluye</p>
            <div className="flex items-center gap-2">
              <p className="rounded-full bg-teal-700 px-3 text-white">Vuelos</p>
              <p className="rounded-full bg-teal-700 px-3 text-white">
                Transporte al hotel
              </p>
              <p className="rounded-full bg-teal-700 px-3 text-white">
                Estadía
              </p>
              <p className="rounded-full bg-teal-700 px-3 text-white">
                Piscina
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <p>corazon</p>
              <button className="rounded-3xl bg-brand px-6 py-1 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Page
