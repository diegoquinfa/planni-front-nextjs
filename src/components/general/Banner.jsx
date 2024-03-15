import PropTypes from 'prop-types'
const Banner = ({ children, src }) => {
  console.log(src)
  return (
    <section className="banner flex w-full max-w-[1280px] flex-col items-center gap-8 md:flex-row">
      <h1 className="h-full w-full text-balance text-[30px] font-bold sm:text-[40px]">
        {children}
      </h1>
      <figure className="relative aspect-video w-full">
        <img
          src={src}
          alt="Banner"
          className="aspect-video h-full w-full rounded-br-3xl rounded-tl-3xl object-cover brightness-90"
        />
        <figcaption className="absolute bottom-4 right-4 text-[30px] drop-shadow-lg">
          <h2 className="shadow-brand font-bold text-white drop-shadow-lg">
            Cartagena
          </h2>
        </figcaption>
      </figure>
    </section>
  )
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired
}

export default Banner
