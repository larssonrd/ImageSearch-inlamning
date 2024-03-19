import { ISearchResult } from '../models/ISearchResult';
import { get } from './serviceBase';

const API_BASE_URL = `https://www.googleapis.com/customsearch/v1?key=${
  import.meta.env.VITE_GOOGLE_API_KEY
}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&searchType=image&q=`;

export const getSearchResult = async (query: string) => {
  const response = await get<ISearchResult>(API_BASE_URL + query);

  return response.data;
};
