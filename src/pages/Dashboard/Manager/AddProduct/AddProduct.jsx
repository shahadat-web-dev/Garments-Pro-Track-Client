import React from "react";
import { useForm } from "react-hook-form";


const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <h1 className="title-font text-bold text-xl md:text-4xl text-center">
          Add Product page
        </h1>
      </div>

      {/* Form */}
      <div className="max-w mx-auto my-12 border border-gray-300 bg-white">
        <form className="card-body w-full " onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">

            {/* 2 Column Grid Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Product Title */}
              <div>
                <label className="label form-label">Product Title</label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  className="input input-field"
                  placeholder="Product Title"
                />
                {errors.title && (
                  <p className="text-red-500">Product title is required</p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="label form-label">Category</label>
                <select
                  {...register("category", { required: true })}
                  className="input input-field"
                >
                  <option value="">Select Category</option>
                  <option value="Shirt">Shirt</option>
                  <option value="Pant">Pant</option>
                  <option value="Jacket">Jacket</option>
                  <option value="Accessories">Accessories</option>
                </select>
                {errors.category && (
                  <p className="text-red-500">Category is required</p>
                )}
              </div>

              {/* Price */}
              <div>
                <label className="label form-label">Price</label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  className="input input-field"
                  placeholder="Price"
                />
                {errors.price && (
                  <p className="text-red-500">Price is required</p>
                )}
              </div>

              {/* Available Quantity */}
              <div>
                <label className="label form-label">Available Quantity</label>
                <input
                  type="number"
                  {...register("availableQuantity", { required: true })}
                  className="input input-field"
                  placeholder="Available Quantity"
                />
                {errors.availableQuantity && (
                  <p className="text-red-500">Available quantity is required</p>
                )}
              </div>

              {/* Minimum Order Quantity */}
              <div>
                <label className="label form-label">Minimum Order Quantity</label>
                <input
                  type="number"
                  {...register("minOrderQuantity", { required: true })}
                  className="input input-field"
                  placeholder="Minimum Order Quantity"
                />
                {errors.minOrderQuantity && (
                  <p className="text-red-500">
                    Minimum order quantity is required
                  </p>
                )}
              </div>

              {/* Payment Option */}
              <div>
                <label className="label form-label">Payment Option</label>
                <select
                  {...register("paymentOption", { required: true })}
                  className="input input-field"
                >
                  <option value="">Select Payment Option</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="PayFirst">PayFirst</option>
                </select>
                {errors.paymentOption && (
                  <p className="text-red-500">Payment option is required</p>
                )}
              </div>

              {/* Demo Video Link */}
              <div>
                <label className="label form-label">
                  Demo Video Link (Optional)
                </label>
                <input
                  type="url"
                  {...register("videoLink")}
                  className="input input-field"
                  placeholder="https://"
                />
              </div>

              {/* Show on Home Page */}
              <div className="flex items-center gap-2 mt-8">
                <input
                  type="checkbox"
                  {...register("showOnHome")}
                  className="checkbox"
                />
                <label className="label form-label">
                  Show on Home Page
                </label>
              </div>
            </div>

            {/* Full Width Fields */}
            <div className="mt-4">
              <label className="label form-label">Product Description</label>
              <textarea
                {...register("description", { required: true })}
                className="input input-field"
                placeholder="Product Description"
              />
              {errors.description && (
                <p className="text-red-500">Description is required</p>
              )}
            </div>

            <div className="mt-4">
              <label className="label form-label">Product Images</label>
              <input
                type="file"
                multiple
                {...register("images", { required: true })}
                className="input input-field"
              />
              {errors.images && (
                <p className="text-red-500">
                  At least one image is required
                </p>
              )}
            </div>

          </fieldset>

 
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
