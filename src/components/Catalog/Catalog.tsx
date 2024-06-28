import React, { useEffect, useState } from "react";

import getData from "../../services/fetchApi";

import { IAlbums, IUser } from "../../types/types&interfaces";
import { CircularProgress } from "@mui/material";

import style from "./catalog.module.scss";
import User from "./User/User";

function Catalog() {
  const [users, setUsers] = useState<IUser[] | any>([]);
  const [albums, setAlbums] = useState<IAlbums[]>([]);

  const [isLoadingAlbum, setIsLoadingAlbum] = useState<boolean>(false);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      const userData: IUser[] = await getData("Users");
      setUsers(userData);
    } catch (error: any) {
      return setUsers(error.message);
    }
  }

  const getUserAlbum = async (userId: string) => {
    setAlbums([]);
    setIsLoadingAlbum(true);
    const userAlbum: IAlbums[] = await getData(`Albumss/${userId}`);
    setAlbums(userAlbum);
    setIsLoadingAlbum(false);
  };

  const userRender = users.map((user: IUser) => {
    return (
      <User
        key={user.id}
        getUserAlbum={getUserAlbum}
        isLoadingAlbum={isLoadingAlbum}
        albums={albums}
        user={user}
      ></User>
    );
  });

  return users.length === 0 ? (
    <div className={style.loaderWrap}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <ul onClick={(event) => event.stopPropagation()} className={style.ul}>
        {userRender}
      </ul>
    </>
  );
}

export default Catalog;
