import { Link } from 'react-router';
import logo from '../../assets/logo.png'
const Logo = () => {
  return (
    <Link to='/' className='flex gap-2 items-center'>
      <img className='size-10' src={logo} alt="" />
      <h3 className="md:text-3xl  font-bold">GarmentsProTrack</h3>
    </Link>
  );
};

export default Logo;