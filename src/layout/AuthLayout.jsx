import { Outlet } from 'react-router';
import Logo from '../components/logo/Logo';
import authImage from '../assets/security.avif'
import backgroundImage from '../assets/authbg.png'
const AuthLayout = () => {
  return (
    <div className='bg-white'>
    <div className='max-w-7xl   mx-auto'>
      <div className='flex justify-center py-10'>
        <Logo></Logo>
      </div>
      <div
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    className="bg-cover bg-center py-16 flex items-center justify-center"
                >
                    <h1 className=" font-bold title-font text-white text-xl md:text-3xl lg:text-5xl ">
                        Welcome to Our Website
                    </h1>
                </div>
      <div className='flex mt-20  items-center flex-col md:flex-row'>
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