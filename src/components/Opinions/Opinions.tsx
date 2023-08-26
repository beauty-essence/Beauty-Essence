import OpinionsBackground from "assets/OpinionsBackground.png" 
import avatar from "assets/icons/avatar.png" 
import arrow_right from "assets/icons/arrow_right.svg" 
import arrow_left from "assets/icons/arrow_left.svg" 
import {Image} from "astro:assets"
import React from 'react'

const Opinions = () => {
  const [slide, setSlide] = React.useState(0)

  return (
  <section
    className="relative w-full flex justify-center items-center lg:py-16 overflow-hidden"
  >
    <img
      src={OpinionsBackground.src}
      alt=""
      className="w-full h-screen object-cover absolute -z-10"
    />
    <div
      className="container md:flex md:gap-5 justify-center p-10 text-secondary-text"
    >
      <div className="hidden md:block">TEST</div>

      <div>
        <h1 className="text-5xl font-primary font-bold text-button-dark">Opinie</h1>
        <p>Zobacz jak oceniają nas nasi klienci</p>
      </div>

      <div className="relative">
        <div>

        <img
          src={arrow_left.src}
          className="hidden w-8 h-8 absolute top-1/2 -left-12"
          />
        <img
          src={arrow_right.src}
          className="hidden w-8 h-8 absolute top-1/2 -right-12"
          />

        <div className="flex gap-2 items-center font-primary">
          <img src={avatar.src} alt="avatar" className="w-12" />
          <p className="text-lg">Joanna Włoch</p>
        </div>

        <p>
          Po wizycie w tym salonie moje zdanie kompletnie się zmieniło. Atmosfera
          od samego wejścia była niesamowicie relaksująca, a delikatne światło i
          spokojna muzyka natychmiast wyciszyły moje nerwy po trudnym dniu.
          Terapeuta był niezwykle profesjonalny, zadbał, aby dostosować masaż do
          moich indywidualnych potrzeb i upewnić się, że czuję się komfortowo
          przez cały czas. Po seansie poczułem się jak nowonarodzony – pełen
          energii, a jednocześnie w głębokim spokoju.
        </p>
          </div>

        <div className="flex gap-2">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <div className="w-4 h-4 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-4 h-4 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-4 h-4 bg-[#D9D9D9] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

export default Opinions
