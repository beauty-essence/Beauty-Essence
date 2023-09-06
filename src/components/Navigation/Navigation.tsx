import HeroBackgroundImage from "assets/HeroBackgroundImage.png"
import company_logo from "assets/company-logo-gold.svg"
import NavigationButton from "./NavigationButton"
import { useState } from "react"
import MobileNavigationList from "./MobileNavigationList"
import { ROUTES } from "helpers/ROUTES"

const Navigation = () => {
  const [toggled, setIsToggleed] = useState(false)

  return (
    <nav
      className="fixed w-full z-20 bg-top bg-cover"
      // style={{ backgroundImage: `url(${HeroBackgroundImage.src})` }}
    >
      {/* <img src={HeroBackgroundImage.src} alt="" className="w-full" /> */}
      <div className="w-full hidden md:flex pt-12 justify-center gap-10 z-10">
        <ul className="flex gap-10 items-center">
          <a href={ROUTES.aboutUs}>
            <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
              O nas
            </li>
          </a>
          <a href={ROUTES.pricing}>
            <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
              Cennik
            </li>
          </a>
          <a href={ROUTES.gallery}>
            <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
              Galeria
            </li>
          </a>
        </ul>
        <a href="/">
          <img src={company_logo.src} alt="Beauty Essence Logo" />
        </a>

        <ul className="flex gap-10 items-center">
          <a href={ROUTES.contact}>
            <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
              Kontakt
            </li>
          </a>
          <a href={ROUTES.offer}>
            <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
              Oferta
            </li>
          </a>
          <a href="" target="_blank">
            <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
              Zarezerwuj
            </li>
          </a>
        </ul>
      </div>
      <div className="flex justify-between items-center pt-8 md:hidden px-8">
        <a href={ROUTES.home}>
          <img src={company_logo.src} alt="Beauty Essence Logo" />
        </a>
        <NavigationButton
          isOpen={toggled}
          onClick={() => setIsToggleed(!toggled)}
        />
      </div>
      <MobileNavigationList
        isOpen={toggled}
        onClick={() => setIsToggleed(!toggled)}
      />
    </nav>
  )
}

export default Navigation
