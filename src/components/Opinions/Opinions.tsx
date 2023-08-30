import OpinionsBackground from "assets/OpinionsBackground.png"
import avatar from "assets/icons/avatar.png"
import arrow_right from "assets/icons/arrow_right.svg"
import arrow_left from "assets/icons/arrow_left.svg"
import { motion, useDragControls, type PanInfo } from "framer-motion"
import { twMerge } from "tailwind-merge"
import React from "react"

const OPINIONS = [
  {
    name: "Joanna Włoch",
    text: "Po wizycie w tym salonie moje zdanie kompletnie się zmieniło. Atmosfera od samego wejścia była niesamowicie relaksująca, a delikatne światło i spokojna muzyka natychmiast wyciszyły moje nerwy po trudnym dniu. Terapeuta był niezwykle profesjonalny, zadbał, aby dostosować masaż do moich indywidualnych potrzeb i upewnić się, że czuję się komfortowo przez cały czas. Po seansie poczułem się jak nowonarodzony – pełen energii, a jednocześnie w głębokim spokoju.",
    avatar: "avatar.png"
  },
  {
    name: "Adam Niski",
    text: "Po wizycie w tym salonie moje zdanie kompletnie się zmieniło. Atmosfera od samego wejścia była niesamowicie relaksująca, a delikatne światło i spokojna muzyka natychmiast wyciszyły moje nerwy.",
    avatar: "avatar.png"
  },
  {
    name: "Krystian Kowalski",
    text: "Do moich indywidualnych potrzeb i upewnić się, że czuję się komfortowo przez cały czas. Po seansie poczułem się jak nowonarodzony – pełen energii, a jednocześnie w głębokim spokoju.",
    avatar: "avatar.png"
  }
]

const Opinions = () => {
  const [isPointerDown, setIsPointerDown] = React.useState(false)
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const controls = useDragControls()
  const numSlides = OPINIONS.length

  const handleShowPrev = () => {
    setCurrentSlide(currentSlide === 0 ? numSlides - 1 : currentSlide - 1)
  }

  const handleShowNext = () => {
    setCurrentSlide(currentSlide === numSlides - 1 ? 0 : currentSlide + 1)
  }

  const handleShowSpecific = (index: number) => {
    setCurrentSlide(index)
  }

  const handleDragStart = (event: React.PointerEvent) => {
    setIsPointerDown(true)
    controls.start(event)
  }

  const handleDragEnd = (_event: MouseEvent, info: PanInfo) => {
    const direction = info.offset.x > 0 ? "right" : "left"

    if (direction === "left") {
      handleShowNext()
    } else {
      handleShowPrev()
    }

    return setIsPointerDown(false)
  }

  return (
    <section className="relative w-full flex flex-col justify-center items-center lg:py-16">
      <img
        src={OpinionsBackground.src}
        alt=""
        className="w-full absolute -z-10 object-cover h-full"
      />
      <div className="flex container md:flex md:gap-5 justify-center p-10 text-secondary-text">
        <div className="hidden md:block md:w-1/2 invisible">TEST</div>

        <div className="md:w-1/2 flex flex-col gap-4 relative">
          <div>
            <h1 className="text-5xl font-primary font-bold text-button-dark mb-2">
              Opinie
            </h1>
            <p>Zobacz jak oceniają nas nasi klienci</p>
          </div>

          <img
            src={arrow_left.src}
            className="hidden w-8 h-8 absolute top-1/2 -left-12 md:block cursor-pointer"
            onClick={handleShowPrev}
          />
          <img
            src={arrow_right.src}
            className="hidden w-8 h-8 absolute top-1/2 -right-12 md:block cursor-pointer"
            onClick={handleShowNext}
          />

          <div className="w-full overflow-hidden">
            <motion.div
              animate={{ x: -currentSlide * 100 + "%" }}
              transition={{ duration: 0.3 }}
              className={twMerge(
                "relative flex w-full",
                isPointerDown ? "cursor-grabbing" : "cursor-default"
              )}
              drag="x"
              dragControls={controls}
              onPointerDown={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {OPINIONS.map((opinion, index) => (
                <div className="flex flex-col gap-2 w-full flex-nowrap shrink-0">
                  <div className="flex gap-2 items-center font-primary">
                    <img src={avatar.src} alt="avatar" className="w-12" />
                    <p className="text-lg">{opinion.name}</p>
                  </div>

                  <p>{opinion.text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex gap-2">
            <div className="flex gap-2">
              {OPINIONS.map((_, index) => (
                <button
                  className={twMerge(
                    "w-4 h-4 rounded-full",
                    index === currentSlide ? "bg-primary" : "bg-secondary-text"
                  )}
                  onClick={() => handleShowSpecific(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Opinions
