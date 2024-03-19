import Search from '../components/Search';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return <div>{isAuthenticated && <Search />}</div>;
};
export default Home;
