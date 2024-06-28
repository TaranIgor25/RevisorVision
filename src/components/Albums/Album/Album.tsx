import React, { useState } from "react";
import Photos from "../../Photos/Photos";

import { CircularProgress } from "@mui/material";
import { IAlbumProps, IAlbums } from "../../../types/types&interfaces";

import style from "./album.module.scss";

function Album({ photos, album, isLoadingPhoto, getAlbumImg }: IAlbumProps) {
  const [isPhotosOpen, setIsPhotosOpen] = useState<string>("");

  const openClosPhotos = (album: IAlbums) => {
    if (album.albumId !== isPhotosOpen) {
      setIsPhotosOpen(album.albumId);
      getAlbumImg(album.albumId);
    } else {
      setIsPhotosOpen("");
    }
  };

  return (
    <li
      className={
        isPhotosOpen === album.albumId ? style.li + " " + style.close : style.li
      }
      onClick={() => openClosPhotos(album)}
      key={album.albumId}
    >
      {album.title}
      {isLoadingPhoto && isPhotosOpen === album.albumId ? (
        <div className={style.loaderWrap}>
          <CircularProgress />
        </div>
      ) : isPhotosOpen && photos[0]?.albumId === album.albumId ? (
        <Photos photos={photos}></Photos>
      ) : (
        ""
      )}
    </li>
  );
}

export default Album;
