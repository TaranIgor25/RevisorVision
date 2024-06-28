import React, { useEffect, useState } from "react";

import Tooltip from "@mui/material/Tooltip";
import Photo from "./Photo/Photo";
import Favorite from "../Favorites/Favorite";
import Popup from "../Popup/Popup";

import { useAppSelector } from "../../hooks/redux";
import { IPhotos, IPhotosIdObj, PhotosProp } from "../../types/types&interfaces";

import style from "./photos.module.scss";

function Photos({ photos, isFavoritePage }: PhotosProp) {
  const [popupProps, setPopupProps] = useState<IPhotos | null>(null);
  const [favoritesObj, setFavoritesObj] = useState<IPhotosIdObj>({});

  const isPopupOpen = useAppSelector((state) => state.popupReducer.popupOpen);
  const favoritesArr = useAppSelector(
    (state) => state.favoriteReducer.favoritesArr
  );

  useEffect(() => {
    createFavoritesObj();
  }, [favoritesArr]);

  const createFavoritesObj = () => {
    const newPhotosObj: IPhotosIdObj = {};
    favoritesArr.forEach((photo: IPhotos) => {
      newPhotosObj[photo.id] = true;
    });
    setFavoritesObj(newPhotosObj);
  };

  const photosRender = (photos: IPhotos[]) =>
    photos.map((photo: IPhotos) => {
      return (
        <Tooltip key={photo.id} title={photo.title}>
          <Photo
            setPopupProps={setPopupProps}
            isFavoritePage={isFavoritePage}
            photo={photo}
            favoritesObj={favoritesObj}
          ></Photo>
        </Tooltip>
      );
    });
  return (
    <>
      {isPopupOpen && <Popup popupProps={popupProps}></Popup>}
      {isFavoritePage === true && favoritesArr.length === 0 ? (
        <Favorite></Favorite>
      ) : (
        <div
          onClick={(event) => event.stopPropagation()}
          className={style.wrap}
        >
          {photosRender(photos)}
        </div>
      )}
    </>
  );
}

export default Photos;
