import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    console.log('after register', data);
    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);

      })
  }

  return (
    <div>
      <div className="card bg-base-100 mx-auto p-10 w-full max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-3xl text-center font-bold">Please Register</h3>
        <div className="card-body"></div>
        <form onSubmit={handleSubmit(handleRegistration)}>
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

            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn text-white bg-linear-to-r from-[#DA14EF] to-[#754DC1] mt-4">Register</button>
          </fieldset>
          <p>Already have an account <Link className='text-blue-600 underline font-medium' to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
