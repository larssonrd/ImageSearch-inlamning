import { IImage } from '../models/IImage';
import { useAuth0 } from '@auth0/auth0-react';
import { addImageToFavorites } from '../service/ImageService';

interface IImageGridProps {
  searchResult: IImage[];
}

const ImageGrid = ({ searchResult }: IImageGridProps) => {
  const { user } = useAuth0();
  console.log(searchResult);

  if (!searchResult || searchResult.length === 0) {
    return <div className='text-center mt-20'>No images found</div>;
  }

  const handleSave = async (imageLink: string) => {
    await addImageToFavorites({
      user: user?.sub,
      imageUrl: imageLink,
    });
  };

  return (
    <ul className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 container mx-auto mt-10'>
      {searchResult.map((image: IImage) => (
        <li key={image.link} className='mx-auto relative'>
          <div className='group aspect-h-7 aspect-w-10 h-48 w-48 md:w-64 md:h-64 overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 flex justify-center items-center'>
            <img
              src={image.link}
              alt=''
              className='pointer-events-none object-cover group-hover:opacity-75 h-full w-full mx-auto'
            />
            <div className='absolute inset-0 bg-black rounded-lg bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center'>
              <button
                className='bg-black font-semibold rounded-lg px-4 py-3'
                onClick={() => handleSave(image.link)}
              >
                Save image
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ImageGrid;
