import Link from 'next/link'

export const PackageCard = () => {
  return (
    <article className="flex w-full flex-col rounded-xl bg-white">
      <div className="flex h-[70%]">
        <div className="relative w-full">
          <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-700 opacity-60">
            <span className="text-center text-xl font-bold text-white">
              7.1
            </span>
          </div>
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/458471254.jpg?k=c53df9a8986d8467d21586bb97b4b9a4cef57ea3f2f06e2f4838d295e9845d33&o=&hp=1"
            alt="img"
            className="h-full w-full rounded-xl object-cover max-sm:rounded-lg"
          />
        </div>
      </div>
      <div className="flex h-[30%]">
        <div className="flex w-[50%] flex-col gap-1 p-2">
          <h2 className="text-xl font-bold text-gray-800">Hotel 1</h2>
          <p className="text-sm font-bold text-gray-600">$ 1.899.999</p>
        </div>
        <div className="flex items-center justify-between">
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
