import { FaPlus } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import { useContext } from "react";
import CartContext from "../context/Cart/CartContext";
import { FaRegTrashCan } from "react-icons/fa6";

const OrderItem = ({ item }) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);

  return (<div className="flex flex-col rounded-lg bg-white sm:flex-row">
    <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.img} alt={item.title} />
    <div className="flex w-full flex-col px-4 py-4">
      <span className="font-semibold">{item.title}</span>
      <p className="text-lg font-bold">USD ${item.price}</p>
    </div>


    <div className="top-0 w-full flex-row px-4 py-4">
      <button
        onClick={() => {
          increase(item)
        }}
        className="btn btn-primary btn-sm mr-2 mb-1"
      >
        <FaPlus />
      </button>
      {item.quantity > 1 && (
        <button onClick={() => decrease(item)} >
          <CiCircleMinus />
        </button>
      )}
      <button className="ml-2" onClick={() => removeFromCart(item)} >
        <FaRegTrashCan />
      </button>
    </div>
    <div>
      <p>Qty: {item.quantity}</p>
    </div>
  </div>
  );
};

export default OrderItem;
