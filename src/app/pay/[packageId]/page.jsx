import { ConfirmationDialog } from '@/components/pay/ConfirmationDialog'

const Page = () => {
  return (
    <section className="container mx-auto min-h-[calc(100dvh_-_298px)] py-8">
      <h1 className="mb-4 text-2xl font-bold">Reservar paquete</h1>
      <div className="flex min-h-[58dvh] w-full flex-col gap-4 lg:flex-row">
        {/* <div className="h-full w-full rounded-lg border p-4"> */}
        <div className="flex h-fit w-full flex-col overflow-hidden rounded-lg bg-white md:flex-row">
          <figure className="w-full lg:w-1/3">
            <img
              className="aspect-[12/10] w-full object-cover md:h-full"
              src="https://media-cdn.tripadvisor.com/media/photo-f/1c/86/86/c7/isla-del-sol.jpg"
              alt="img hotel"
            />
          </figure>
          <div className="w-full">
            <h2 className="mt-4 text-center font-bold">Paquete</h2>
            <div className="flex flex-col gap-2 p-4">
              <h3>
                <span className="font-bold">Hotel: </span>
                San juan de la Hoja
              </h3>
              <h3>
                <span className="font-bold">Restaurante: </span>
                Hugo
              </h3>
              <div>
                <h3 className="font-bold">Atracciones:</h3>
                <ol className="pl-4">
                  <li>
                    <h3>Kayak</h3>
                  </li>
                  <li>
                    <h3>Trineo</h3>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/**/}
        <form className="border-gray-30 flex min-w-max flex-col content-between gap-4 rounded-lg border bg-white p-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Payment method</h2>
            <div className="flex items-center justify-between rounded-lg border border-red-600 bg-red-100 p-6">
              <img className="h-14" src="/ms_logo.svg" alt="ms logo" />
              **** **** **** 1234
            </div>
          </div>
          <div className="flex h-full flex-col gap-4">
            <p className="flex justify-between">
              Subtotal <span className="font-bold">$ 1.000.000</span>
            </p>
            <p className="flex justify-between">
              Comisión <span className="font-bold">$ 0</span>
            </p>

            <div className="mt-auto flex flex-col gap-4">
              <hr />
              <p className="flex justify-between">
                Total <span className="font-bold">$ 1.000.000</span>
              </p>
              <ConfirmationDialog />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Page
