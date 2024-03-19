import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/logo.png';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <header className='flex justify-between items-center py-5 px-8 container mx-auto'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt='' width={60} />
        <p className='text-xl font-bold'>ImageSearch</p>
      </div>
      <div className='flex items-center gap-4'>
        <div>
          {isAuthenticated && (
            <img src={user?.picture} className='rounded-full w-10' />
          )}
        </div>
        <div>{isAuthenticated && <DropdownMenu />}</div>
        <div>{isAuthenticated ? <LogOutButton /> : <LogInButton />}</div>
      </div>
    </header>
  );
};
export default Header;
