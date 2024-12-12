import { setIsDarkMode } from "@/state/index";
import { RootState } from "@/state/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useDarkMode = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector<RootState, boolean>(
        (state) => state.global.isDarkMode
    );

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        dispatch(setIsDarkMode(!isDarkMode));
    };

    return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
