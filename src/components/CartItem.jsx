import { useContext } from "react";
// import { formatCurrency } from "../utils";
// import TrashIcon from "/assets/icons/trash-outline.svg";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";

import CartContext from "../context/Cart/CartContext";

const CartItem = ({ product }) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img className="cart-image" src={product.image} alt={product.name} />
      <div>
        <h5>{product.name}</h5>
        <p>{product.price}</p>
      </div>

      {/* Buttons */}
      <div className="btn-container">
        <button
          onClick={() => increase(product)}
          className="btn btn-primary btn-sm mr-2 mb-1"
        >
          <FaPlus />
        </button>

        <div>
          <p>Qty: {product.quantity}</p>
        </div>

        {product.quantity > 1 && (
          <button onClick={() => decrease(product)} className="btn">
            <CiCircleMinus />
          </button>
        )}

        {product.quantity === 1 && (
          <button onClick={() => removeFromCart(product)} className="btn">
            <FaRegTrashCan />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
