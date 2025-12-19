import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';


const BookingForm = () => {
  const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
      const {user} = useAuth();



  const handleBooking = (data) => {
    console.log(data);

        Swal.fire({
      title: "Agree with the Cost ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm and Continue Payment!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.post('/bookings', data)
          .then(res => {
            console.log('after saving parcel', res.data);
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Parcel has created. plaease Pay",
                showConfirmButton: false,
                timer: 2500
              });
            }
          })


      }
    });


  }

  return (
    <div className='py-20'>
      <form onSubmit={handleSubmit(handleBooking)} className="max-w-7xl  mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">

        {/* Grid for two-column fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email</label>
            <input

              name="email"
              placeholder="Email"
              {...register('email')}
              defaultValue={user?.email}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Product Title */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Product Title</label>
            <input
              {...register('productTitle')}
              name="productTitle"
              placeholder="Product Title"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Unit Price */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Unit Price</label>
            <input
              {...register('unitPrice')}
              name="unitPrice"
              placeholder="Unit Price"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Order Quantity */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Order Quantity</label>
            <input
              {...register('orderQuantity')}
              type="number"
              name="orderQuantity"
              placeholder="Order Quantity"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">First Name</label>
            <input
              {...register('firstName')}
              name="firstName"
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Last Name</label>
            <input
              {...register('lastName')}
              name="lastName"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Contact Number</label>
            <input
              {...register('contactNumber')}
              name="contactNumber"
              placeholder="Contact Number"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Total Price */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Total Price</label>
            <input
              {...register('totalPrice')}
              name="totalPrice"
              placeholder="Total Price"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

        </div>

        {/* Full-width fields */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Delivery Address</label>
          <textarea
            name="deliveryAddress"
            placeholder="Delivery Address"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows={3}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Additional Notes (Optional)</label>
          <textarea
            name="notes"
            placeholder="Additional Notes"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows={3}
          />
        </div>

        <button
          type="submit"
          value="Send Booking"
          className="md:w-2/12 w-full py-3 font-semibold text-white rounded-md btn bg-linear-to-r from-[#81C2FF]  to-[#D6AEFF]  transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
