import { useDarkModeContext } from "../context/darkModeContext";

const DarkModeButton = () => {

    const {toggleDarkMode} = useDarkModeContext();


    return (
        <i
            onClick={() => toggleDarkMode()}
            className="fa-solid fa-moon">
        </i>
    )
}

export default DarkModeButton