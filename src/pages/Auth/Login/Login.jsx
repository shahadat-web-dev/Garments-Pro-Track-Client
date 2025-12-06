import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth();
  
    const handleLogin = (data) => {
      console.log('after register', data);
      signInUser(data.email, data.password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error);
  
        })
    }

  return (
    <div>
      <div>
      <div className="card bg-base-100 p-10 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-3xl text-center font-bold">Please Login</h3>
        <div className="card-body"></div>
        <form  onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            {/* Email */}
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

            {/* Password */}
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
            <button className="btn  text-white bg-linear-to-r from-[#DA14EF] to-[#754DC1] mt-4">Login</button>
          </fieldset>
          <p>New to GarmentsProTrack  <Link className='text-blue-600 underline font-medium' to='/register'>Register</Link></p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;