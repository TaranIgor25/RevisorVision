import React from "react";
import { Route, Routes } from "react-router-dom";

import Catalog from "./components/Catalog/Catalog";
import Layout from "./components/Layout/Layout";
import Photos from "./components/Photos/Photos";

import { useAppSelector } from "./hooks/redux";


function App() {
  const favoritesArr = useAppSelector(
    (state) => state.favoriteReducer.favoritesArr
  );
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Catalog />}></Route>
        <Route
          path="favorites"
          element={<Photos photos={favoritesArr} isFavoritePage={true} />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
