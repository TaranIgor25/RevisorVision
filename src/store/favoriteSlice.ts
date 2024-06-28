import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IPhotos } from "../types/types&interfaces";

const initialState: IInitialState = {
  favoritesArr: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state: any, action: PayloadAction<IPhotos>) {
      state.favoritesArr.push(action.payload);
    },
    removeFavorite(state: any, action: PayloadAction<number>) {
      state.favoritesArr.splice(action.payload, 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
