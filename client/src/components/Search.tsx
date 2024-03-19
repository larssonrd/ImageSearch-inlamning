import { useState } from 'react';
import { getSearchResult } from '../service/searchService';
import ImageGrid from './ImageGrid';
import { ISearchResult } from '../models/ISearchResult';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<ISearchResult>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await getSearchResult(searchQuery);
    if (result) {
      setSearchResult(result);
    }
  };

  const handleCorrection = async (correctSpelling: string) => {
    setSearchQuery(correctSpelling);
    const result = await getSearchResult(correctSpelling);
    if (result) {
      setSearchResult(result);
    }
  };

  return (
    <>
      <div className='max-w-lg mx-auto mt-20'>
        <form className='flex gap-2' onSubmit={handleSubmit}>
          <input
            type='text'
            name='searchQuery'
            id='searchQuery'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
          <button className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Search
          </button>
        </form>
        <div className='text-center mt-2'>
          {searchResult?.spelling && (
            <p>
              Menade du{' '}
              <span
                className='font-bold cursor-pointer'
                onClick={() =>
                  handleCorrection(searchResult?.spelling.correctedQuery)
                }
              >
                {searchResult?.spelling.correctedQuery}
              </span>
              ?
            </p>
          )}
        </div>
        <div className='text-center mt-2'>
          {searchResult &&
            `Searchtime: ${searchResult.searchInformation.searchTime}s`}
        </div>
      </div>

      <div>
        {searchResult && <ImageGrid searchResult={searchResult.items} />}
      </div>
    </>
  );
};
export default Search;
