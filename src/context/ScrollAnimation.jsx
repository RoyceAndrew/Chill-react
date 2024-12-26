import { createContext, useState, useEffect } from "react";

export const ScrollContext = createContext();


export const ScrollContextProvider = ({children}) => {
    const [fixed, setFixed] = useState(false)
        const [visible, setVisible] = useState(true)
        let scrollBefore = 0
    
        useEffect(() => {
          const checkScroll = () => {
            let scroll = scrollY
            
            if (scroll === 0) {
                setFixed(false)
            } else if (scroll > 0) {
                setFixed(true)
             }
            
            
            if (scroll > scrollBefore) {
                setVisible(false)
            } else if (scroll < scrollBefore) {
                setVisible(true)
            }
    
            scrollBefore = scroll
          } 
          window.addEventListener("scroll", checkScroll)
        return () => {
         window.removeEventListener("scroll", checkScroll)
        }
        }, [])

    return <ScrollContext.Provider value={{fixed, visible}}>
        {children}
    </ScrollContext.Provider>
}