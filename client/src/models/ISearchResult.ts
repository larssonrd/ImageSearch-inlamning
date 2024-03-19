import { IImage } from './IImage';

export interface ISearchResult {
  context: {
    title: string;
  };
  items: IImage[];
  searchInformation: {
    searchTime: string;
  };
  spelling: {
    correctedQuery: string;
  };
}
