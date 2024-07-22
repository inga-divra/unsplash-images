import { useState, useEffect, createContext, useContext } from "react";

const AppContext = createContext()

// Dark Mode - JS: Check which theme the user prefers in their browser
const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(prefersDarkMode);
    return prefersDarkMode;
};

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
    const [searchTerm, setSearchTerm] = useState('racoon')

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
    }

    // Sets dark/light theme according to user's preference when the app loads
    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme)
    }, [isDarkTheme])

    return <AppContext.Provider
        value={{
            isDarkTheme,
            toggleDarkTheme,
            searchTerm,
            setSearchTerm
        }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)