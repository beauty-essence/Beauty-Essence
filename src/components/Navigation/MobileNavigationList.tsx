import { ROUTES } from "helpers/ROUTES"

interface MobileNavigationListProps extends React.HTMLProps<HTMLDivElement> {
  isOpen: boolean
}

const MobileNavigationList = ({
  isOpen,
  ...rest
}: MobileNavigationListProps) => {
  return (
    <div
      className={`bg-primary transition-transform bg-background w-full h-full fixed top-1/2 left-0 -translate-y-1/2 color-white z-20 px-8 ${
        !isOpen ? "-translate-x-full" : "translate-x-0"
      } duration-300 flex justify-center items-center l:hidden`}
      {...rest}
    >
      <ul className="flex flex-col gap-10 items-center">
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
        <a href={ROUTES.vouchers}>
          <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
            Kup voucher
          </li>
        </a>
        <a href={ROUTES.contact}>
          <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
            Kontakt
          </li>
        </a>
        <a href={window.location.pathname !== "/" ? "/#offer" : "#offer"}>
          <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
            Oferta
          </li>
        </a>
        <a
          href="https://booksy.com/pl-pl/210989_beauty-essence-torun_masaz_22875_torun#ba_s=sh_1"
          target="_blank"
        >
          <li className="font-detail text-white text-lg font-medium hover:scale-110 transition-transform">
            Zarezerwuj
          </li>
        </a>
      </ul>
    </div>
  )
}

export default MobileNavigationList
