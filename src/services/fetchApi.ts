import { IAlbums, IPhotos, IUser } from "../types/typesAndInterfaces";

const BASE_URL = "http://localhost:3000/";
const GET_USERS = "Users/";
const GET_ALBUMS = "Albums/";
const GET_PHOTOS = "Photos/";

export async function getData(endPoint: string) {
  try {
    const response = await fetch(`${BASE_URL}${endPoint}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
}

export async function getUsersRequest() {
  const usersData: IUser[] = await getData(`${GET_USERS}`);
  return usersData;
}

export async function getAlbumsRequest(userId: string) {
  const userAlbumData: IAlbums[] = await getData(`${GET_ALBUMS}${userId}`);
  return userAlbumData;
}

export async function getPhotosRequest(albumId: string) {
  const photosData: IPhotos[] = await getData(`${GET_PHOTOS}${albumId}`);
  return photosData;
}

export default getData;
