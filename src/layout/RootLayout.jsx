import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto'>
        <div className='md:pt-5'>
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <div className='pb-5'>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;