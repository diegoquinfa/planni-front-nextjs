import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const HomeCarousel = () => {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className="m-auto h-fit w-[80%]  2xl:w-full"
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="aspect-[9/13] max-h-96 max-w-96 py-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="h-full rounded-lg shadow-md">
              <Card className="h-full overflow-hidden bg-white p-0">
                <CardContent className="flex h-full flex-col p-0">
                  <figure className="relative h-[100%] w-full">
                    <img
                      src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/458471254.jpg?k=c53df9a8986d8467d21586bb97b4b9a4cef57ea3f2f06e2f4838d295e9845d33&o=&hp=1"
                      alt="img"
                      className="h-[100%] w-full object-cover"
                    />
                    <div className="absolute right-2 top-2 grid h-7 w-7 place-content-center rounded-sm bg-green-700">
                      <p className="text-xs font-bold text-white">8.7</p>
                    </div>
                  </figure>
                  <article className="flex h-fit w-full flex-col justify-between gap-1 p-2">
                    <div>
                      <h2 className="font-bold text-gray-700">Hotel 1</h2>
                      <p className="text-xs font-bold text-gray-400">
                        Cartagena de indias
                      </p>
                    </div>
                    <p className="text-right text-sm font-bold">$ 1.899.999</p>
                  </article>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default HomeCarousel
