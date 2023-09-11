import voucher_photo from "assets/vouchers-photo.png"
import { useState } from "react"
import close_icon from "assets/icons/close_black.svg"

const Vouchers = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true)
  console.log(isPopupOpen)
  return (
    <>
      <section className="w-full flex justify-center items-center py-48">
        <div className="md:flex items-center gap-16 max-w-3xl">
          <div className="text-center md:text-left">
            <h3 className="text-7xl font-primary font-bold text-button-dark mb-3">
              Vouchery
            </h3>
            <p className="text-secondary-text font-secondary text-xl font-medium mb-9">
              Spraw przyjemność swoim bliskim
            </p>
            <p className="text-secondary-text font-secondary text-xl font-medium mb-9 px-10 md:px-0 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio
              sapien, congue a purus vitae, ultricies consequat nibh. Nulla
              facilisi. Vestibulum euismod cursus congue. Praesent placerat
              imperdiet magna et mollis. Integer urna dui, semper quis arcu et,
              placerat placerat velit. Cras in felis nec nisi dictum blandit
              eget ut nisl.
            </p>
            <button
              className=" bg-primary px-10 py-4 hover:opacity-90 transition-opacity"
              onClick={() => setIsPopupOpen(true)}
            >
              Zamów voucher
            </button>
          </div>
          <img
            src={voucher_photo.src}
            alt="Masażysta"
            className="hidden md:block"
          />
        </div>
      </section>
      {isPopupOpen && (
        <div className="w-full h-screen fixed top-0 left-0 bg-button-dark bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative bg-white w-full max-w-md p-11 rounded-lg">
            <img
              src={close_icon.src}
              alt="Ikona zamknij"
              className="absolute top-5 right-5"
            />
            <h6 className="font-primary text-3xl text-button-dark font-bold mb-8">
              Komu chcesz <br /> sprawić prezent?
            </h6>
            <form className="flex flex-col gap-2 md:w-full">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-primary text-lg">
                  Imię i nazwisko
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jan Kowalski"
                  className="border-2 border-primary px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-primary text-lg">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="twój@email.com"
                  className="border-2 border-primary px-2 py-1"
                />
              </div>
              <button
                type="submit"
                className="bg-primary font-primary self-end px-10 py-2 text-lg mt-8"
              >
                Przejdź do płatności
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Vouchers
