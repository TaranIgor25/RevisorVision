import React from "react";

import { IPhotoProps, IPhotos } from "../../../types/typesAndInterfaces";
import { addFavorite, removeFavorite } from "../../../store/favoriteSlice";
import { openClosePopup } from "../../../store/popupSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";

import style from "./photo.module.scss";

function Photo({
  photo,
  isFavoritePage,
  setPopupProps,
  favoritesObj,
}: IPhotoProps) {
  const favoritesArr = useAppSelector(
    (state) => state.favoriteReducer.favoritesArr
  );
  const dispatch = useAppDispatch();

  const handleChange = (photo: IPhotos) => {
    if (!favoritesObj[photo.id]) {
      dispatch(addFavorite(photo));
    } else {
      const findElIndex = favoritesArr.findIndex(
        (element: IPhotos) => element.id === photo.id
      );
      dispatch(removeFavorite(findElIndex));
    }
  };

  const activeInactiveStyle = favoritesObj[photo.id]
    ? style.active
    : style.inactive;

  return (
    <div className={style.photoWrap}>
      <div className={style.favorWrap}>
        <span
          onClick={() => handleChange(photo)}
          className={activeInactiveStyle}
        />
        <img
          onClick={() => {
            setPopupProps(photo);
            dispatch(openClosePopup(true));
          }}
          className={style.photo}
          src={photo.url}
          alt={photo.title}
        ></img>
      </div>
      <div className={style.descriptionWrap}>
        {isFavoritePage && <p className={style.tittle}>{photo.title}</p>}
      </div>
    </div>
  );
}

export default Photo;
