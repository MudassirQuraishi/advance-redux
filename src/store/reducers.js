import { combineReducers } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui_slice";

const rootReducer = combineReducers({
    ui: uiSlice.reducer,
});

export default rootReducer;
