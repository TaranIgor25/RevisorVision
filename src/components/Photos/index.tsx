import React, { useCallback, useEffect, useState } from "react";

import Photo from "./Photo";
import Favorite from "../Favorites";
import Popup from "../Popup";

import { useAppSelector } from "../../store/hooks/redux";
import {
  IPhotos,
  IPhotosIdObj,
  PhotosProp,
} from "../../types/typesAndInterfaces";

import style from "./photos.module.scss";
import { Tooltip } from "@mui/material";

function Photos({ photos, isFavoritePage }: PhotosProp) {
  const [popupProps, setPopupProps] = useState<IPhotos | null>(null);
  const [favoritesObj, setFavoritesObj] = useState<IPhotosIdObj>({});

  const isPopupOpen = useAppSelector((state) => state.popupReducer.popupOpen);
  const favoritesArr = useAppSelector(
    (state) => state.favoriteReducer.favoritesArr
  );

  const isThisFavoritePage =
    isFavoritePage === true && favoritesArr.length === 0;

  const createFavoritesObj = useCallback(() => {
    const newPhotosObj: IPhotosIdObj = {};
    favoritesArr.forEach((photo: IPhotos) => {
      newPhotosObj[photo.id] = true;
    });
    setFavoritesObj(newPhotosObj);
  }, [favoritesArr]);

  useEffect(() => {
    createFavoritesObj();
  }, [favoritesArr, createFavoritesObj]);

  const photosRender = photos.map((photo: IPhotos) => {
    return (
      <Tooltip key={photo.id} title={photo.title}>
        <div>
          <Photo
            setPopupProps={setPopupProps}
            isFavoritePage={isFavoritePage}
            photo={photo}
            favoritesObj={favoritesObj}
          ></Photo>
        </div>
      </Tooltip>
    );
  });

  const favoritePageOrFavoriteBlock = (
    <>
      {isThisFavoritePage ? (
        <Favorite></Favorite>
      ) : (
        <div
          onClick={(event) => event.stopPropagation()}
          className={style.wrap}
        >
          {photosRender}
        </div>
      )}
    </>
  );

  return (
    <>
      {isPopupOpen && <Popup popupProps={popupProps}></Popup>}
      {favoritePageOrFavoriteBlock}
    </>
  );
}

export default Photos;
