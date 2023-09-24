import { useState, useEffect } from "react"
import company_logo from "assets/company-logo-gold.svg"
import CircleLoader from "react-spinners/CircleLoader"

const Preloader = () => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(false)

  useEffect(() => {
    const preloaderShownInSession = sessionStorage.getItem(
      "preloaderShownInSession"
    )

    if (!preloaderShownInSession) {
      setIsPreloaderVisible(true)
      sessionStorage.setItem("preloaderShownInSession", "true")
    }
  }, [])
  return (
    <section
      className={`fixed top-0 left-0 z-[999] bg-secondary w-full h-screen  ${
        isPreloaderVisible ? "block" : "hidden"
      }`}
    >
      <div className="w-full h-full flex justify-center flex-col items-center gap-20">
        <img
          src={company_logo.src}
          alt="Beauty Essence Logo"
          className="w-56"
        />
        <CircleLoader color="white" size={80} />
        <h1 className="text-2xl text-white font-primary font-medium mb-2 absolute bottom-4">
          Ładujemy twoją stronę. Daj nam jeszcze chwilkę
        </h1>
      </div>
    </section>
  )
}

export default Preloader
