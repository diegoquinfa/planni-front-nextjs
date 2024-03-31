import Link from 'next/link'

export const PackageCard = () => {
  return (
    <article className="relative h-fit w-full overflow-hidden rounded-xl bg-white">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/458471254.jpg?k=c53df9a8986d8467d21586bb97b4b9a4cef57ea3f2f06e2f4838d295e9845d33&o=&hp=1"
        alt="img"
        className="aspect-[12/10] h-[75%] w-full object-cover "
      />

      <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center overflow-hidden rounded-sm">
        <div className=" h-7 w-7 bg-green-700 opacity-60" />
      </div>
      <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center text-xs font-bold text-white">
        7.1
      </span>

      <div className="flex h-fit w-full flex-col justify-between gap-1 p-2">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Hotel 1</h2>
          <p className="text-xs font-bold text-gray-400">Foursquere</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-gray-600">$ 1.899.999</p>
          <Link
            className="rounded-2xl bg-brand px-8 py-1 font-bold text-white"
            href="/packages/1"
          >
            Ver más
          </Link>
        </div>
      </div>
    </article>
  )
}
