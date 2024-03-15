import Footer from '@/components/footer/Footer'
import FormTrip from '@/components/form/FormTrip'
import Container from '@/components/general/Container'
import Banner from '@/components/general/Banner'
import HomeCarousel from '@/components/home/HomeCarousel'
import Navbar from '@/components/nav/Navbar'

export default function Home() {
  return (
    <>
      <header className="bg-white">
        <Navbar />
      </header>
      <main className="flex min-h-dvh flex-col items-center justify-start bg-gray-100">
        <Container>
          <Banner src="/img/cartagena.jpeg">
            Deja que creemos las <span className="text-brand">vacaciones</span>{' '}
            de tus sueños
          </Banner>
          <FormTrip />
          <h2 className="text-4xl font-bold text-gray-900">Recomendados</h2>
          <HomeCarousel />
          <h2 className="text-4xl font-bold text-gray-900">Destinos</h2>
          <figure className="relative">
            <img
              src="/img/destino-cartagena.jpg"
              alt="Destinos"
              className="aspect-video h-full w-full rounded-3xl object-cover brightness-75"
            />
            <figcaption className="absolute left-0 top-0 h-full w-full items-center">
              <h2 className="flex h-full w-full items-center justify-center text-5xl font-bold text-white">
                Cartagena
              </h2>
            </figcaption>
          </figure>
        </Container>
        <Footer />
      </main>
    </>
  )
}
