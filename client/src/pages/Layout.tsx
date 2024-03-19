import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth0 } from '@auth0/auth0-react';

const Layout = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>{isAuthenticated && <Outlet />}</main>
      <Footer />
    </div>
  );
};
export default Layout;
