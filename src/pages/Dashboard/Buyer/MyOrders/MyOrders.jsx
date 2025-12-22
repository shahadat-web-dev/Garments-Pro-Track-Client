import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaEdit } from 'react-icons/fa';
import { FaMagnifyingGlass, FaRegTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router';

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ['myOrders', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    }
  });



  const handleDelete = id => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/bookings/${id}`)
          .then(res => {
            console.log(res.data);
            if (res.data.deletedCount) {
              // refresh the data UI
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your parcel resquest has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });

  }

  return (
    <div className='p-10'>
      <h2 className='text-3xl pb-10  font-medium'>All of my bookings orders: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Payment</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((booking, index) => <tr key={booking._id}>
                <th>{index + 1}</th>
                <td>{booking.firstName}</td>
                <td>${booking.email}</td>
                <td>
                  {
                    booking.paymentStatus === 'paid' ? 
                    <span className='text-fuchsia-400'>Paid</span>
                    : 
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className='bg-[#5320df] p-2 rounded-sm text-white font-bold btn btn-sm'>Pay</button>
                    </Link>
                  }
                </td>
                <td>Blue</td>
                <td>
                  <td>
                    <button className='btn btn-square hover:bg-primary'>
                      <FaMagnifyingGlass size={18} />
                    </button>
                    <button className='btn mx-2 btn-square'>
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className='btn btn-square hover:bg-primary'>
                      <FaRegTrashCan size={18} />
                    </button>
                  </td>
                </td>

              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;