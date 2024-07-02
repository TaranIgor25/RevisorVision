import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhotos } from "../types/typesAndInterfaces";

export interface IInitialState {
  favoritesArr: IPhotos[];
}

const initialState: IInitialState = {
  favoritesArr: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state: IInitialState, action: PayloadAction<IPhotos>) {
      state.favoritesArr.push(action.payload);
    },
    removeFavorite(state: IInitialState, action: PayloadAction<number>) {
      state.favoritesArr.splice(action.payload, 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
