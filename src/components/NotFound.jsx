
import ErroeImg from '../assets/error-404.png'
import { Link } from 'react-router';
const NotFound = () => {
    return (
    <>

      <div className='flex justify-center pt-30'>
        <img src={ErroeImg} alt="" />
      </div>

      <div className='text-center pt-12'>
        <h1 className='text-5xl font-semibold'>Oops, page not found!</h1>
        <p className='text-xl text-[#627382] pt-3'>The page you are looking for is not available.</p>
        <div className='pt-5'>
          <Link to='/' className='bg-linear-to-r from-[#6933E5] to-[#9A5DF1] text-white font-semibold px-10 rounded-lg py-3'>Go Back!</Link>
        </div>
      </div>

    </>
  );
};

export default NotFound;
