import React from "react"
import Masonry from "react-responsive-masonry"
import one from "assets/gallery/one.jpg"
import two from "assets/gallery/two.jpg"
import three from "assets/gallery/three.jpg"
import four from "assets/gallery/four.jpg"
import five from "assets/gallery/five.jpg"
import arrow_right from "assets/icons/arrow_right.svg"
import arrow_left from "assets/icons/arrow_left.svg"
import close from "assets/icons/close.svg"
import { twMerge } from "tailwind-merge"

const Gallery = (props: { isGalleryPage?: boolean }) => {
  const images = [one, two, three, four, five]

  const [previewImageIndex, setPreviewImageIndex] = React.useState(0)
  const [showPreview, setShowPreview] = React.useState(false)

  const openPreview = (index: number) => {
    setPreviewImageIndex(index)
    setShowPreview(true)
  }

  const closePreview = () => {
    setShowPreview(false)
  }

  const handleShowPrev = () => {
    setPreviewImageIndex(
      previewImageIndex === 0 ? images.length - 1 : previewImageIndex - 1
    )
  }

  const handleShowNext = () => {
    setPreviewImageIndex(
      previewImageIndex === images.length - 1 ? 0 : previewImageIndex + 1
    )
  }

  return (
    <>
      <section
        className={twMerge(
          "relative w-full flex justify-center items-center lg:py-16",
          props.isGalleryPage
            ? "bg-white text-button-dark pt-28 lg:pt-36"
            : "bg-[#31392F] text-white"
        )}
      >
        <div className="container md:flex md:gap-5 justify-center flex flex-col items-center p-10">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl font-primary font-bold mb-2">Galeria</h1>
            <p className="max-w-md text-center">
              Zobacz nas w akcji. Odkryj atmosferę, profesjonalizm <br /> i
              staranność, z jaką podchodzimy do każdego klienta. Przeglądaj
              wybrane zdjęcia, by poczuć magię i jakość naszych zabiegów.
            </p>
          </div>
          <Masonry columnsCount={3} gutter="10px" className="mt-10">
            {images
              .slice(0, props.isGalleryPage ? images.length : 6)
              .map((image, index) => (
                <img
                  src={image.src}
                  key={image.src}
                  alt="Masaż wykonywany na ludzkim ciele"
                  className="cursor-pointer"
                  onClick={() => openPreview(index)}
                />
              ))}
          </Masonry>
          {props.isGalleryPage ? null : (
            <a
              href="/galeria"
              className="mt-10 bg-primary px-10 py-4 hover:opacity-90 transition-opacity"
            >
              Zobacz więcej zdjęć
            </a>
          )}
        </div>
      </section>
      {showPreview && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="bg-black w-full h-full fixed top-0 left-0 opacity-70"></div>
          <img src={images[previewImageIndex].src} className="z-50" />
          <img
            src={close.src}
            className=" w-12 h-12 absolute top-10 right-10 cursor-pointer"
            onClick={closePreview}
          />
          <img
            src={arrow_left.src}
            className=" w-12 h-12 absolute bottom-5 right-1/2 md:top-1/2 md:left-5 md:right-auto cursor-pointer"
            onClick={handleShowPrev}
          />
          <img
            src={arrow_right.src}
            className=" w-12 h-12 absolute bottom-5 left-1/2 md:top-1/2 md:right-5 md:left-auto cursor-pointer"
            onClick={handleShowNext}
          />
        </div>
      )}
    </>
  )
}

export default Gallery
