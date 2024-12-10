// import { getTrackingData } from "@/services/trackingApi";
import { configureStore } from "@reduxjs/toolkit";
import shipmentReducer from "./shipment/shipmentSlice";

export const store = configureStore({
    reducer: {
        shipment: shipmentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
