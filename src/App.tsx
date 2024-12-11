import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TrackingShipments from "./pages/TrackingShipments";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./layouts/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FullPageLoading from "@/components/FullPageLoading";

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
                <Suspense fallback={<FullPageLoading />}>
                    <Routes>
                        <Route path="*" element={<PageNotFound />} />
                        <Route element={<AppLayout />}>
                            <Route path="/" element={<TrackingShipments />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
