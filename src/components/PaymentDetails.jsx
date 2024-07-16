import { useContext } from 'react';
import CartContext from '../context/Cart/CartContext';
import Checkout from './Checkout';

const OrderTotal = () => {
  const { total } = useContext(CartContext);
  console.log('** OrderTotal **', total);
  return (<div>
    <div className="mt-6 flex items-center justify-between">
      <p className="text-sm font-medium text-gray-900">Total</p>
      <p className="text-2xl font-semibold text-gray-900">USD ${total}</p>
    </div>
  </div>)
};

const PaymentDetails = () => (
  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Payment Details</p>
    <p className="text-gray-400">Complete your order by providing your payment details.</p>
    <OrderTotal />
    <div className="mt-6">
      <Checkout />
    </div>
  </div>
);

export default PaymentDetails;