import React, { useState } from "react";

import getData from "../../services/fetchApi";
import { AlbumsProp, IAlbums, IPhotos } from "../../types/types&interfaces";

import Album from "./Album/Album";

import style from "./albums.module.scss";

function Albums({ albums, user }: AlbumsProp) {
  const [photos, setPhotos] = useState<IPhotos[]>([]);
  const [isLoadingPhoto, setIsLoadingPhoto] = useState<boolean>(false);

  const getAlbumImg = async (albumId: string) => {
    setPhotos([]);
    setIsLoadingPhoto(true);
    const albumPhotos: IPhotos[] = await getData(`Photos/${albumId}`);
    setPhotos(albumPhotos);
    setIsLoadingPhoto(false);
  };

  const albumsRender = albums.map((album: IAlbums) => {
    return (
      <Album
        getAlbumImg={getAlbumImg}
        isLoadingPhoto={isLoadingPhoto}
        photos={photos}
        album={album}
      ></Album>
    );
  });
  return (
    <>
      {albums[0]?.userId === user.id ? (
        <ul onClick={(event) => event.stopPropagation()} className={style.ul}>
          {albumsRender}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}

export default Albums;
