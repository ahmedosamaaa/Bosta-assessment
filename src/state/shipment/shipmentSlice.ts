import { ShipmentTypes } from "@/types/shipmentTypes";
import { createSlice } from "@reduxjs/toolkit";

type ShipmentState = {
    currentStep: number;
    trackNumber: string;
    data: ShipmentTypes | null;
    progressBarColor: string;
    status: string;
    error: string | null;
};

const initialState: ShipmentState = {
    currentStep: 0,
    trackNumber: "",
    data: null,
    progressBarColor: "bg-[#0098A5]",
    status: "idle",
    error: null,
};

const shipmentSlice = createSlice({
    name: "shipment",
    initialState,
    reducers: {
        saveShipmentData(state, action) {
            state.data = action.payload;
        },
        trackNumber(state, action) {
            state.trackNumber = action.payload;
        },
    },
});

export const { saveShipmentData, trackNumber } = shipmentSlice.actions;

export default shipmentSlice.reducer;
