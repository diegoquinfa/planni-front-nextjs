import FormTrip from '@/components/form/FormTrip'
import HomeCarousel from '@/components/home/HomeCarousel'
import Navbar from '@/components/nav/Navbar'

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-dvh flex-col items-center justify-start bg-gray-100 p-4 ">
        <FormTrip />
        <HomeCarousel />
      </main>
    </>
  )
}
