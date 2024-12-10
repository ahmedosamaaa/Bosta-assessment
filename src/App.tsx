import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TrackingShipments from "./pages/TrackingShipments";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./layouts/AppLayout";
import Spinner from "@/components/FullPageLoading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// React Query settings
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

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
        </QueryClientProvider>
    );
}

export default App;
