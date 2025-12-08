import { Outlet } from 'react-router';
import Logo from '../components/logo/Logo';
import authImage from '../assets/security.avif'

const AuthLayout = () => {
  return (
    <div className='bg-white'>
    <div className='max-w-7xl  mx-auto'>
      <Logo></Logo>
      <div className='flex min-h-screen  items-center flex-col md:flex-row'>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
        <div className='flex-1'>
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthLayout;