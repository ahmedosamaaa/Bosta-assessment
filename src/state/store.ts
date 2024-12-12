// import { getTrackingData } from "@/services/trackingApi";
import { configureStore } from "@reduxjs/toolkit";
import shipmentReducer from "./shipment/shipmentSlice";
import globalReducer from "./index/index";

export const store = configureStore({
    reducer: {
        global: globalReducer,
        shipment: shipmentReducer,
    },
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
