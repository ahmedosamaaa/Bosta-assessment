import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TrackingShipments from "./pages/TrackingShipments";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./layouts/AppLayout";
import Spinner from "@/components/Spinner";

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="*" element={<PageNotFound />} />
                    <Route element={<AppLayout />}>
                        <Route
                            path="/tracking-shipments"
                            element={<TrackingShipments />}
                        />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
