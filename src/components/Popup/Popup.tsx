import React from "react"
import popup_image from "assets/popup.jpg"
import close_icon from "assets/icons/close_black.svg"
import { useState } from "react"

const Popup = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false)
  return (
    <div
      className={`w-full bg flex justify-center
      ${isPopupOpened ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="w-[330px] h-[330px] md:w-[500px] md:h-[500px] fixed z-40 translate-y-[80%] md:translate-y-1/2">
        <img
          src={close_icon.src}
          alt=""
          className="absolute right-0 scale-120 cursor-pointer"
          onClick={() => setIsPopupOpened(!isPopupOpened)}
        />
        <img src={popup_image.src} alt="" className="" />
      </div>
    </div>
  )
}

export default Popup
