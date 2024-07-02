import React, { useState } from "react";

import { getPhotosRequest } from "../../services/fetchApi";
import { AlbumsProp, IAlbums, IPhotos } from "../../types/typesAndInterfaces";
import Album from "./Album";

import style from "./albums.module.scss";

function Albums({ albums, user }: AlbumsProp) {
  const [photos, setPhotos] = useState<IPhotos[]>([]);
  const [isLoadingPhoto, setIsLoadingPhoto] = useState<boolean>(false);
  const [isPhotosOpen, setIsPhotosOpen] = useState<string>("");

  const isThisUserId = albums[0]?.userId === user.id;

  const getAlbumImg = async (albumId: string) => {
    setPhotos([]);
    setIsLoadingPhoto(true);
    const albumPhotos = await getPhotosRequest(albumId);
    setPhotos(albumPhotos);
    setIsLoadingPhoto(false);
  };

  const albumsRender = albums.map((album: IAlbums) => {
    return (
      <Album
        isPhotosOpen={isPhotosOpen}
        setIsPhotosOpen={setIsPhotosOpen}
        key={album.albumId}
        getAlbumImg={getAlbumImg}
        isLoadingPhoto={isLoadingPhoto}
        photos={photos}
        album={album}
      ></Album>
    );
  });

  return (
    <>
      {isThisUserId ? (
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
