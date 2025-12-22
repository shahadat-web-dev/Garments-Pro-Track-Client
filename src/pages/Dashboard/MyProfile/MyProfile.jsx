

const MyProfile = () => {
 

  return (
    <div className="flex justify-center items-center min-h-[80vh] p-5">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-gray-100">
        
     
        <div className="h-32 bg-[#5320df] rounded-t-2xl"></div>

        <div className="px-6 pb-8">
          <div className="relative">
          
            <div className="-mt-16 flex justify-center">
              {/* <img
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
                src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                alt="Profile"
              /> */}
            </div>
          </div>

          <div className="text-center mt-4">

            {/* <h2 className="text-2xl font-bold text-gray-800">
              {user?.displayName || "User Name Not Found"}
            </h2> */}
            
            {/* <p className="text-gray-500 font-medium">{user?.email}</p> */}
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-600 font-semibold">User ID:</span>
              {/* <span className="text-sm text-gray-500">{user?.uid?.slice(0, 10)}...</span> */}
            </div>
            
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-600 font-semibold">Status:</span>
              <span className="badge badge-success text-white">Active</span>
            </div>
          </div>

          <div className="mt-8">
            <button className="btn w-full bg-[#5320df] hover:bg-[#4119b5] text-white border-none">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;