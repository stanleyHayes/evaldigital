import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./../features/ui/ui-slice";
import contactReducer from "../features/contact/contact-slice";
import portfolioReducer from "../features/portfolio/portfolio-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        contact: contactReducer,
        portfolio: portfolioReducer
    }
});

export default store;