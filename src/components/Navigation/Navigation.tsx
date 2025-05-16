import HeroBackgroundImage from "assets/HeroBackgroundImage.png"
import company_logo from "assets/company-logo-gold.svg"
import NavigationButton from "./NavigationButton"
import { useState, useEffect } from "react"
import MobileNavigationList from "./MobileNavigationList"
import { ROUTES } from "helpers/ROUTES"

const Navigation = () => {
  const [toggled, setIsToggleed] = useState(false)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [navigationColor, setNavigationColor] = useState("")

  useEffect(() => {
    const handleNavigationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener("popstate", handleNavigationChange)

    return () => {
      window.removeEventListener("popstate", handleNavigationChange)
    }
  }, [currentPath])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setNavigationColor("rgb(49 57 47)")
      } else {
        setNavigationColor("")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className="fixed w-full z-20 bg-top bg-cover transition-colors duration-300"
      style={{
        backgroundImage: `url(${
          currentPath !== "/" ? HeroBackgroundImage.src : ""
        })`,
        backgroundColor: navigationColor
      }}
    >
      <div className="w-full hidden md:flex py-8 justify-center gap-10 z-10">
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
          <a href={ROUTES.shop}>
            <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
              Sklep
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
          <a href={currentPath !== "/" ? "/#offer" : "#offer"}>
            <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
              Oferta
            </li>
          </a>
          <a
            href="https://booksy.com/pl-pl/210989_beauty-essence-torun_masaz_22875_torun#ba_s=sh_1"
            target="_blank"
            rel="nofollow"
          >
            <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform animate-pulse-rotate animation-delay-2s">
              Zarezerwuj
            </li>
          </a>
        </ul>
      </div>
      <div className="flex justify-between items-center py-6 md:hidden px-8">
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
