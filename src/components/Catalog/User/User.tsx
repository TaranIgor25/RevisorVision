import React, { useState } from "react";

import Albums from "../../Albums/Albums";
import { CircularProgress } from "@mui/material";
import { IUser, IUserProps } from "../../../types/types&interfaces";

import style from "./user.module.scss";

function User({ user, albums, isLoadingAlbum, getUserAlbum }: IUserProps) {
  const [isAlbumOpen, setIsAlbumOpen] = useState<string>("");

  const openCloseAlbum = (user: IUser) => {
    if (user.id !== isAlbumOpen) {
      getUserAlbum(user.id);
      setIsAlbumOpen(user.id);
    } else {
      setIsAlbumOpen("");
    }
  };
  return (
    <li
      className={
        isAlbumOpen === user.id ? style.li + " " + style.close : style.li
      }
      onClick={() => openCloseAlbum(user)}
      key={user.id}
    >
      {user.name}
      {isAlbumOpen === user.id && isLoadingAlbum ? (
        <div className={style.loaderWrap}>
          <CircularProgress />
        </div>
      ) : (
        ""
      )}
      {isAlbumOpen && <Albums albums={albums} user={user}></Albums>}
    </li>
  );
}

export default User;
