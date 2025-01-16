import { useLayoutEffect, useState } from "react";


export default function useWindowResize() {
   const [windowSize, setWindowSize] = useState({
     width: 0,
     height: 0
   })

   function WindowResize() {
    setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
    })
   }

   useLayoutEffect(() => {
    WindowResize()

    window.addEventListener('resize', WindowResize)

    return () => {
        window.removeEventListener('resize', WindowResize)
    }
   }, [])

   return windowSize
}