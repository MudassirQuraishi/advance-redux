import { combineReducers } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui_slice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
});

export default rootReducer;
