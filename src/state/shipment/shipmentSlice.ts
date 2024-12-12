import { ShipmentTypes } from "@/types/shipmentTypes";
import { createSlice } from "@reduxjs/toolkit";

export interface ShipmentState {
    data: ShipmentTypes | null;
    currentStep: number;
    currentState: string;
    progressBarColor: string;
    trackingNumber: string;
}

const initialState: ShipmentState = {
    data: null,
    currentStep: 0,
    currentState: "",
    progressBarColor: "bg-secondary-color",
    trackingNumber: "",
};

const shipmentSlice = createSlice({
    name: "shipment",
    initialState,
    reducers: {
        updateTrackingNumber(state, action) {
            state.trackingNumber = action.payload;
        },
        saveShipmentData(state, action) {
            state.data = action.payload;
        },
        updateShipmentStatus(state, action) {
            const stateCode = action.payload; // This is the status we will handle

            switch (stateCode) {
                case 10:
                    state.currentStep = 0;
                    state.currentState = "created";
                    state.progressBarColor = "bg-secondary-color";
                    break;
                case 24:
                    state.currentStep = 1;
                    state.currentState = "picked_up";
                    state.progressBarColor = "bg-secondary-color";
                    break;
                case 20:
                    state.currentStep = 2;
                    state.currentState = "prepare_for_delivery";
                    state.progressBarColor = "bg-secondary-color";
                    break;
                case 41:
                    state.currentStep = 3;
                    state.currentState = "out_for_delivery";
                    state.progressBarColor = "bg-secondary-color";
                    break;
                case 45:
                    state.currentStep = 4;
                    state.currentState = "deliverd";
                    state.progressBarColor = "bg-secondary-color";
                    break;
                case 46:
                    state.currentStep = 2;
                    state.currentState = "canceled-returned";
                    state.progressBarColor = "bg-primary-color";
                    break;

                default:
                    state.currentStep = 0;
                    state.currentState = "";
                    state.progressBarColor = "bg-light-color";
            }
        },
    },
});

export const { saveShipmentData, updateShipmentStatus, updateTrackingNumber } =
    shipmentSlice.actions;

export default shipmentSlice.reducer;
