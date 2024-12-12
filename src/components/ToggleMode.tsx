import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface ToggleMode {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const ToggleMode = ({ isDarkMode, toggleDarkMode }: ToggleMode) => {
    return (
        <button onClick={toggleDarkMode} className="px-4 py-2 rounded-md ">
            {isDarkMode ? (
                <MdOutlineLightMode size={20} className="text-text-color " />
            ) : (
                <MdOutlineDarkMode size={20} className="text-text-color" />
            )}
        </button>
    );
};

export default ToggleMode;
