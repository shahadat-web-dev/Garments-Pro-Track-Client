import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: booking } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${parcelId}`);
      return res.data;
    }
  });

  const handlePayment = async () => {
    const paymentInfo = {
    cost: booking.cost,
    parcelId: booking._id,
    senderEmail: booking.email,
    parcelName: booking.firstName,
  }
    const res = await axiosSecure.post('/create-checkout-session',paymentInfo );
    console.log(res.data);
   
  }

  if (isLoading) {
    return <div className='flex justify-center pt-20'>
      <progress className="progress w-56"></progress>
    </div>
  }

  return (
    <div className='p-10'>
      <h2 className='text-3xl pb-10  font-medium'>Please Pay: {booking.firstName}</h2>
      <button
        onClick={handlePayment}
        className='bg-[#5320df] p-2 rounded-sm text-white font-bold btn btn-sm'>Pay</button>
    </div>
  );
};

export default Payment;