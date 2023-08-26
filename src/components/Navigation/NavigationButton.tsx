interface NavigationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean
}

const NavigationButton = ({ isOpen, ...rest }: NavigationButtonProps) => {
  return (
    <button
      className=" w-16 h-16 flex gap-2 flex-col justify-center items-center rounded-full l:hidden z-40"
      {...rest}
    >
      <div
        className={`origin-center transition-transform w-10 h-[0.3rem] bg-white flex ${
          isOpen ? "rotate-45" : "rotate-0"
        } ${isOpen ? "translate-y-[0.8rem]" : "translate-y-0"}`}
      />
      <div
        className={`origin-center transition-opacity w-10 h-[0.3rem] bg-white flex ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`origin-center transition-transform w-10 h-[0.3rem] bg-white flex ${
          isOpen ? "-rotate-45" : "rotate-0"
        } ${isOpen ? "-translate-y-[0.8rem]" : "translate-y-0"}`}
      />
    </button>
  )
}

export default NavigationButton
