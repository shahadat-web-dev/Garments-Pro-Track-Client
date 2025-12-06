import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, updateUserProfile } = useAuth();

  const imageBB_API_KEY = "YOUR_IMGBB_API_KEY";

  const handleRegistration = async (data) => {
    const { name, email, password, role } = data;

    const imageFile = { image: data.photo[0] };

    try {
      // 1. Upload image to ImgBB
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${imageBB_API_KEY}`, {
        method: "POST",
        body: (() => {
          const formData = new FormData();
          formData.append("image", imageFile.image);
          return formData;
        })()
      });

      const imgData = await res.json();
      const imageURL = imgData.data.url;

      // 2. Create user in Firebase
      const result = await registerUser(email, password);
      const loggedUser = result.user; // NOW WORKS

      // 3. Update Firebase Profile
      await updateUserProfile(name, imageURL);

      // 4. Prepare User Object
      const userInfo = {
        name,
        email,
        photoURL: imageURL,
        role,
        status: "pending"
      };

      // 5. Save User in Database
      fetch("https://your-api-url.com/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userInfo)
      });

      console.log("User Registration Successful", userInfo);

    } catch (error) {
      console.log(error);
    }
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

            {/* File Upload */}
            <label className="label">Photo</label>
            <input type="file" {...register("photo", { required: true })} className="file-input" />
            {errors.photo && <p className="text-red-500">Photo is required</p>}

            <label className="label">Select Role</label>
            <select {...register("role", { required: true })} className="select select-bordered">
              <option value="buyer">Buyer</option>
              <option value="manager">Manager</option>
            </select>

            {/* Hidden Status */}
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
            {errors.password?.type === "pattern" &&
              <p className="text-red-500">Must contain uppercase & lowercase</p>}

            <button className="btn text-white bg-linear-to-r from-[#DA14EF] to-[#754DC1] mt-4">
              Register
            </button>
          </fieldset>

          <p className="mt-3">
            Already have an account?
            <Link className="text-blue-600 underline font-medium" to="/login"> Login </Link>
          </p>
        </form>

        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
