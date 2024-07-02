import React from "react";
import { CircularProgress } from "@mui/material";

import Photos from "../../Photos";
import { IAlbumProps, IAlbums } from "../../../types/typesAndInterfaces";

import style from "./album.module.scss";

function Album({
  photos,
  album,
  isLoadingPhoto,
  getAlbumImg,
  isPhotosOpen,
  setIsPhotosOpen,
}: IAlbumProps) {
  
  const openCloseStyle = isPhotosOpen === album.albumId ? style.close : style.open;
  const isLoading = isLoadingPhoto && isPhotosOpen === album.albumId;
  const isThisAlbumId = isPhotosOpen && photos[0]?.albumId === album.albumId;

  const openClosPhotos = (album: IAlbums) => {
    if (album.albumId !== isPhotosOpen) {
      setIsPhotosOpen(album.albumId);
      getAlbumImg(album.albumId);
    } else {
      setIsPhotosOpen("");
    }
  };

  const renderPhoto = (
    <>
      {isLoading ? (
        <div className={style.loaderWrap}>
          <CircularProgress />
        </div>
      ) : isThisAlbumId ? (
        <Photos photos={photos}></Photos>
      ) : (
        ""
      )}
    </>
  );
  return (
    <li
      className={openCloseStyle}
      onClick={() => openClosPhotos(album)}
      key={album.albumId}
    >
      {album.title}
      {renderPhoto}
    </li>
  );
}

export default Album;
