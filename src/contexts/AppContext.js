'use client'

import { useState, useContext, createContext } from 'react'

const AppContext = createContext()

export const AppContextProvider = ({children})=>{

    const [mode, setMode] = useState('movies')

    //AGREGAR LOADING

    return (
        <AppContext.Provider value={{
            mode,
            setMode
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