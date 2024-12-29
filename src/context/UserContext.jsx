import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [logedin, setLog] = useState(false)

    useEffect(() => {
        const check = localStorage.getItem("akun")

        if (check) {
            setLog(true)
        }
    },[])

    return <UserContext.Provider value={[logedin, setLog]}>
        {children}
    </UserContext.Provider>
}