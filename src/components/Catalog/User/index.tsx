import React from "react";
import { CircularProgress } from "@mui/material";

import Albums from "../../Albums";
import { IUser, IUserProps } from "../../../types/typesAndInterfaces";

import style from "./user.module.scss";

function User({
  user,
  albums,
  isLoadingAlbum,
  getUserAlbum,
  isOpenAlbum,
  setIsOpenAlbum,
}: IUserProps) {
  const openCloseAlbum = (user: IUser) => {
    if (isOpenAlbum !== user.id) {
      setIsOpenAlbum(user.id);
      getUserAlbum(user.id);
    } else {
      setIsOpenAlbum("");
    }
  };

  const isThisAlbumLoading = isLoadingAlbum && user.id === isOpenAlbum;
  const openCloseStyle =
    user.id === isOpenAlbum ? style.li + " " + style.close : style.li;

  const albumsRender = (
    <>
      {isThisAlbumLoading ? (
        <div className={style.loaderWrap}>
          <CircularProgress />
        </div>
      ) : (
        ""
      )}
      {isOpenAlbum && <Albums albums={albums} user={user}></Albums>}
    </>
  );

  return (
    <li
      className={openCloseStyle}
      onClick={() => openCloseAlbum(user)}
      key={user.id}
    >
      {user.name}
      {albumsRender}
    </li>
  );
}

export default User;
