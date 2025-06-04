import { Products } from "helpers/products";

const Shop = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center text-white">
      <div className="container flex flex-col md:flex-row gap-10 justify-between p-4 md:py-10">
        <h1 className="text-7xl font-primary font-bold md:text-left text-button-dark my-6">Sklep</h1>
      </div>
      <div className="container mx-auto flex flex-wrap -mx-2">
        {Products.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="product text-button-dark border-primary border-2 flex flex-col items-center h-full pb-[25px]">
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={product.title}
                  src={product.image.src}
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-center font-primary">{product.title}</h2>
              <p className="text-center mb-[15px] font-primary text-xl">
                {product.detailsPrice.length > 1 && <>od </>}{product.detailsPrice[0].price} zł
              </p>

              <a
                href={`/produkty/${product.slug}`}
                className="mt-auto bg-primary inline-block p-5 2xl:px-12 text-button-dark font-medium border-primary border-2
          hover:bg-white hover:transition hover:duration-200 hover:ease-in-out text-center w-[80%]"
              >
                Kup teraz
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Shop;
