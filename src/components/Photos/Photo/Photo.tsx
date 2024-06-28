import React from "react";

import { IPhotoProps, IPhotos } from "../../../types/types&interfaces";
import { addFavorite, removeFavorite } from "../../../store/favoriteSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { openClosePopup } from "../../../store/popupSlice";

import style from "./photo.module.scss";

function Photo({ photo, isFavoritePage, setPopupProps, favoritesObj }: IPhotoProps) {
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
  return (
    <div className={style.photoWrap}>
      <div className={style.favorWrap}>
        <span
          onClick={() => handleChange(photo)}
          className={favoritesObj[photo.id] ? style.active : style.inactive}
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
