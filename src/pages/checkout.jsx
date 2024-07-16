import { useContext } from "react";
import CartContext from "../context/Cart/CartContext";
import { Link } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import PaymentDetails from "../components/PaymentDetails";

const CheckOutPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems.length ? (
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <OrderSummary items={cartItems} />
          <PaymentDetails />
        </div>
      ) : (
        <div className="my-40 w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Shopping Cart
            <span className="text-3xl text-gray-600"> ({cartItems.length})</span>
          </h1>
          <h4 className="text-center text-xl text-gray-500">Cart is empty</h4>
          <Link to="/products">
            <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CheckOutPage;
