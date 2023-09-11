import voucher_photo from "assets/vouchers-photo.png"
import { useState } from "react"
import VoucherModal from "./VoucherModal"

const Vouchers = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
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
        <VoucherModal onCloseModal={() => setIsPopupOpen(false)} />
      )}
    </>
  )
}

export default Vouchers
