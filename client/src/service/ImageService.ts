import { INewFavorite } from '../models/INewFavorite';
import { get, post } from './serviceBase';

const API_BASE_URL = 'http://localhost:3000/api';

export const getFavoriteImages = async (userId: string) => {
  const response = await get<INewFavorite[]>(
    API_BASE_URL + '/favoriteImages/' + userId
  );
  return response.data;
};

export const addImageToFavorites = async (reqBody: INewFavorite) => {
  const response = await post(API_BASE_URL + '/favoriteImage', reqBody);
  return response.data;
};
