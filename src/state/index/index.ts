import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;
export interface InitialStateTypes {
    isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
    isDarkMode: prefersDarkMode,
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
            localStorage.setItem("isDarkMode", action.payload.toString());
        },
    },
});

export const { setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
