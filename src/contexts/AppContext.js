'use client'

import { useState, useContext, createContext } from 'react'

const AppContext = createContext()

export const AppContextProvider = ({children})=>{

    const [loading, setLoading] = useState(true)
    const [mode, setMode] = useState('movies')

    return (
        <AppContext.Provider value={{
            mode,
            loading,
            setMode,
            setLoading
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{

    const context = useContext(AppContext)

    if(!context){
        throw new Error('error con useAppContext')
    }

    return context
}

export default AppContext