import { useNavigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

const SocialLogin = ({ onLoginSuccess }) => {  

  const { signInGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; 

  const handleGoogleSignIn = () => {
      signInGoogle()
      .then(result => {
        toast.success("Google Login Successful!");
        console.log(result);
        if (onLoginSuccess) {
          onLoginSuccess(result.user); 
        } else {
          navigate(from, { replace: true }); 
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className='text-center'>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <p className='text-[#EC0BF6] font-medium py-5 text-center'>CREATE AN ACCOUNT</p>
      {/* Google */}
      <button
       onClick={handleGoogleSignIn}
        className="btn w-full bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
