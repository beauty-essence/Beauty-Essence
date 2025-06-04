import React from "react"
import popup_image from "assets/popup_05_2025.jpg"

import close_icon from "assets/icons/close_black.svg"
import { useState } from "react"

const Popup = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(true)
  return (
    <div
      className={`w-full bg flex justify-center
      ${isPopupOpened ? "block" : "hidden"}
      `}
    >
      <div className="w-[330px] h-[330px] md:w-[500px] md:h-[500px] fixed z-40 translate-y-[80%] md:translate-y-[20%]">
        <img
          src={close_icon.src}
          alt=""
          className="absolute right-0 scale-120 cursor-pointer scale-90"
          onClick={() => setIsPopupOpened(!isPopupOpened)}
        />
        <img src={popup_image.src} alt="" className="" />
      </div>
    </div>
  )
}

export default Popup
