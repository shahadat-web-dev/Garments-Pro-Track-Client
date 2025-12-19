import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  
  const handleRegistration = async (data) => {
    console.log('after register', data);

    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user);

        // success toast
        toast.success('Successfully registered');

        // navigate to home
        navigate('/');
      })
      .catch(error => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 mx-auto p-10 w-full max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-3xl text-center font-bold">Please Register</h3>

        <form onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="fieldset">

            <label className="label">Full Name</label>
            <input type="text" {...register("name", { required: true })} className="input" />
            {errors.name && <p className="text-red-500">Name is required</p>}

            <label className="label">Email</label>
            <input type="email" {...register("email", { required: true })} className="input" />
            {errors.email && <p className="text-red-500">Email is required</p>}

            <label className="label">Photo</label>
            <input type="file" {...register("photo", { required: true })} className="file-input" />
            {errors.photo && <p className="text-red-500">Photo is required</p>}

            <label className="label">Select Role</label>
            <select {...register("role", { required: true })} className="select select-bordered">
              <option value="buyer">Buyer</option>
              <option value="manager">Manager</option>
            </select>

            <input type="hidden" value="pending" {...register("status")} />

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/
              })}
              className="input"
            />

            {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
            {errors.password?.type === "minLength" && <p className="text-red-500">Minimum 6 characters</p>}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">Must contain uppercase & lowercase</p>
            )}

            <button type="submit" className="btn text-white bg-linear-to-r from-[#DA14EF] to-[#754DC1] mt-4">
              Register
            </button>
          </fieldset>

          <p className="mt-3">
            Already have an account?
            <Link className="text-blue-600 underline font-medium" to="/login"> Login </Link>
          </p>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Register;
