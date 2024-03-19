import axios from 'axios';

export const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

export const post = async <T>(url: string, body: T) => {
  return await axios.post<T>(url, body);
};
