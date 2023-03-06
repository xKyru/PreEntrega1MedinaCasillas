import {useContext, createContext, useState} from "react";

const DarkModeContext = createContext();
const useDarkModeContext = () => useContext(DarkModeContext)

const DarkModeProvider = props => {

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if(darkMode){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode");
        }
    }


    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )

};

export {DarkModeProvider, useDarkModeContext};