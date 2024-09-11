import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import themeReducer from "./themeSlice";

 export const store= configureStore({
    reducer: {
        theme:themeReducer,
        cart: cartReducer,
    },
})