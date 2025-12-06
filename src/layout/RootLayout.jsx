import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div className='bg-gray-100'>
      <div className=''>
        <div className=''>
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <div className=''>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;