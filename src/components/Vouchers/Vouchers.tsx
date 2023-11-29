import voucher_photo from "assets/vouchers-photo.webp"
import { useState } from "react"
import VoucherModal from "./VoucherModal"

const Vouchers = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  return (
    <>
      <section className="w-full flex justify-center items-center py-32">
        <div className="md:flex items-center gap-16 max-w-3xl">
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-7xl font-primary font-bold text-button-dark mb-3">
              Vouchery
            </h3>
            <p className="text-secondary-text font-secondary text-xl font-medium mb-9">
              Spraw przyjemność swoim bliskim
            </p>
            <p className="text-secondary-text font-secondary text-xl font-medium mb-9 px-10 md:px-0 ">
              Podaruj więcej niż rzecz – podaruj niezapomniane doświadczenie.
              Nasz voucher prezentowy to idealna propozycja dla kogoś
              wyjątkowego. Przemyślane zabiegi, ciepła atmosfera i chwile
              relaksu tworzą niezrównane wrażenia. Pokaż bliskim, że zasługują
              na specjalne momenty pełne odprężenia. Nasz zespół ekspertów zadba
              o każdy detal, gwarantując satysfakcję i uśmiech na twarzy
              obdarowanej osoby.
            </p>
            <button
              className=" bg-primary px-10 py-4 hover:opacity-90 transition-opacity border-primary border-2
              hover:bg-white hover:transition hover:duration-200 hover:ease-in-out"
              onClick={() => setIsPopupOpen(true)}
            >
              Zamów voucher
            </button>
          </div>
          <div class="max-w-[262px] md:w-[393px] overflow-hidden hidden md:flex justify-center">
            <img
              src={voucher_photo.src}
              alt="Masażysta"
              className="w-full h-full object-cover"
            />
          </div>
          {/* <img
            src={voucher_photo.src}
            alt="Masażysta"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </section>
      {isPopupOpen && (
        <VoucherModal onCloseModal={() => setIsPopupOpen(false)} />
      )}
    </>
  )
}

export default Vouchers
