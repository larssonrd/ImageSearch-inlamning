import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { getFavoriteImages } from '../service/ImageService';
import { INewFavorite } from '../models/INewFavorite';

const Favorites = () => {
  const { user } = useAuth0();
  const [favoriteImages, setFavoriteImages] = useState<INewFavorite[]>([]);

  useEffect(() => {
    const getImages = async () => {
      if (user?.sub) {
        try {
          const fetchedImages = await getFavoriteImages(user.sub);
          console.log(fetchedImages);
          setFavoriteImages(fetchedImages);
        } catch (error) {
          console.error('Failed to fetch favorite images', error);
        }
      }
    };

    getImages();
  }, [user?.sub]);

  return (
    <div className='text-center'>
      <h1 className='text-2xl font-semibold'>Your Favorite Images</h1>
      {favoriteImages.length > 0 ? (
        <ul className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 container mx-auto mt-10'>
          {favoriteImages.map((image: INewFavorite) => (
            <li key={image.imageUrl} className='mx-auto relative'>
              <div className='group aspect-h-7 aspect-w-10 h-48 w-48 md:w-64 md:h-64 overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 flex justify-center items-center'>
                <img
                  src={image.imageUrl}
                  alt=''
                  className='pointer-events-none object-cover group-hover:opacity-75 h-full w-full mx-auto'
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite images found.</p>
      )}
    </div>
  );
};
export default Favorites;
