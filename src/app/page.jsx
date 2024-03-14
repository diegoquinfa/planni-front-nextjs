import FormTrip from '@/components/form/FormTrip'
import Container from '@/components/general/Container'
import Banner from '@/components/home/Banner'
import HomeCarousel from '@/components/home/HomeCarousel'
import Navbar from '@/components/nav/Navbar'

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-dvh flex-col items-center justify-start bg-gray-100">
        <Container>
          <Banner />
          <FormTrip />
          <HomeCarousel />
        </Container>
      </main>
    </>
  )
}
