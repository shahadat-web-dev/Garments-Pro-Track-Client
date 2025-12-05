import logo from '../../assets/logo.png'
const Logo = () => {
  return (
    <div className='flex gap-2 items-center'>
      <img className='size-10' src={logo} alt="" />
      <h3 className="md:text-3xl font-bold">GarmentsProTrack</h3>
    </div>
  );
};

export default Logo;