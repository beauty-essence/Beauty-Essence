// interface PreloaderProps {
//   isPreloaderVisible: boolean
// }
import { useState, useEffect } from "react"

const Preloader = () => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsPreloaderVisible(false)
    }, 5000)
  }, [])
  return (
    <section
      className={`fixed top-0 left-0 z-[999] bg-primary w-full h-screen animate-preloader ${
        isPreloaderVisible ? "visible" : "hidden"
      }`}
      //   style={{ animationIterationCount: 1 }}
    >
      dupa
    </section>
  )
}

export default Preloader
