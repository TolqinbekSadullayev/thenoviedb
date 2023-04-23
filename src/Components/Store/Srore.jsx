import { configureStore } from "@reduxjs/toolkit";
import { Watchliststore } from "./reducer/Watchliststore";

const store = configureStore({
    reducer:{
        stateWatch : Watchliststore
    }
})
export {store}