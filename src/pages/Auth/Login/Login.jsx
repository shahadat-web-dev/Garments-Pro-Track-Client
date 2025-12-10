import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result);
                toast.success("Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            });
    }


    return (
        <div className="card bg-base-100  p-10 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div>

            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <h3 className="text-3xl text-center font-bold">Please Login</h3>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="input"
                        placeholder="Email"
                    />
                    {errors.email?.type === 'required' && (
                        <p className='text-red-500'>Email is required</p>
                    )}



                    <label className="label">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/
                        })}
                        className="input"
                        placeholder="Password"
                    />
                    <label className="label">Select Role</label>
                    <select {...register("role", { required: true })} className="select select-bordered">
                        <option value="buyer">Buyer</option>
                        <option value="manager">Manager</option>
                    </select>
                    {errors.password?.type === 'required' && (
                        <p className='text-red-500'>Password is required</p>
                    )}
                    {errors.password?.type === 'minLength' && (
                        <p className='text-red-500'>Password must be 6 characters or longer</p>
                    )}
                    {errors.password?.type === 'pattern' && (
                        <p className='text-red-500'>
                            Password must contain at least 1 uppercase & 1 lowercase letter
                        </p>
                    )}

                    <button className="btn text-white bg-linear-to-r from-[#DA14EF] to-[#754DC1] mt-4">Login</button>
                </fieldset>
                <p>New to GarmentsProTrack? <Link className='text-blue-600 underline font-medium' to='/register'>Register</Link></p>
            </form>
            <SocialLogin />

        </div>
    );
};

export default Login;
