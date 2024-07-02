import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

import { getAlbumsRequest, getUsersRequest } from "../../services/fetchApi";
import { IAlbums, IUser } from "../../types/typesAndInterfaces";
import User from "./User";

import style from "./catalog.module.scss";

function Catalog() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [albums, setAlbums] = useState<IAlbums[]>([]);
  const [isLoadingAlbum, setIsLoadingAlbum] = useState<boolean>(false);
  const [isOpenAlbum, setIsOpenAlbum] = useState<string>("");

  const loading = users.length === 0;

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const userData = await getUsersRequest();
    setUsers(userData);
  }

  const getUserAlbum = async (userId: string) => {
    setAlbums([]);
    setIsLoadingAlbum(true);
    const userAlbum = await getAlbumsRequest(userId);
    setAlbums(userAlbum);
    setIsLoadingAlbum(false);
  };

  const userRender = users.map((user: IUser) => {
    return (
      <User
        isOpenAlbum={isOpenAlbum}
        setIsOpenAlbum={setIsOpenAlbum}
        key={user.id}
        getUserAlbum={getUserAlbum}
        isLoadingAlbum={isLoadingAlbum}
        albums={albums}
        user={user}
      ></User>
    );
  });

  return loading ? (
    <div className={style.loaderWrap}>
      <CircularProgress />
    </div>
  ) : (
    <ul onClick={(event) => event.stopPropagation()} className={style.ul}>
      {userRender}
    </ul>
  );
}

export default Catalog;
