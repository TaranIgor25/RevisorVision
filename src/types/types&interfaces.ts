export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface IAlbums {
  albumId: string;
  userId: string;
  title: string;
}

export interface IPhotos {
  albumId: string;
  id: string;
  title: string;
  url: string;
}

export type AlbumsProp = {
  albums: IAlbums[];
  user: IUser;
};

export type PhotosProp = {
  photos: IPhotos[];
  isFavoritePage?: boolean;
};

export interface IInitialState {
  favoritesArr: IPhotos[];
}

export interface IPhotosIdObj {
  [key: string]: boolean;
}

export interface IPopupProps {
  popupProps: IPhotos | null;
}

export interface IPhotoProps {
  photo: IPhotos;
  isFavoritePage?: boolean;
  setPopupProps: React.Dispatch<React.SetStateAction<IPhotos | null>>;
  favoritesObj: IPhotosIdObj;
}

export interface IAlbumProps {
  photos: IPhotos[];
  album: IAlbums;
  isLoadingPhoto: boolean;
  getAlbumImg: (albumId: string) => Promise<void>;
}

export type IPage = "/" | "/favorites";

export interface IUserProps {
  user: IUser;
  albums: IAlbums[];
  isLoadingAlbum: boolean;
  getUserAlbum: (userId: string) => Promise<void>;
}
