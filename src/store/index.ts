import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";
import popupReducer from './popupSlice';

const rootReducer = combineReducers({favoriteReducer, popupReducer});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore["dispatch"];
