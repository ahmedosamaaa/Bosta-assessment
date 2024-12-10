import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

import "./index.css";
import App from "./App.tsx";
import "./i18n/i18n.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
