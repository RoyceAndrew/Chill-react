import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [logedin, setLog] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const check = localStorage.getItem("akun")
      
        if (check) {
            setLog(true)
        }
        setTimeout(() => setIsLoading(false), 1000);
    },[])

    return <UserContext.Provider value={{logedin, setLog, isLoading}}>
        {children}
    </UserContext.Provider>
}