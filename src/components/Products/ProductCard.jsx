import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import CartContext from "../../context/Cart/CartContext";


const ProductCard = ({ data, onProductAdded }) => {
  console.log('** ProductCard **')
  const { addToCart, increase, cartItems } = useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={data.aosDelay}
      key={data.id}
      className="space-y-3"
    >
      <img
        src={data.img}
        alt=""
        className="h-[220px] w-[150px] object-cover rounded-md"
      />
      <div>
        <h3 className="font-semibold">{data.title}</h3>
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{data.rating}</span>
        </div>
        <p className="text-md text-gray-600">CLP ${data.price}</p>

      </div>
      {isInCart(data) && (
        <button
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          onClick={() => {
            console.log('** Add more clicked **')
            increase(data);
            onProductAdded();
          }}
        >
          Add more
        </button>
      )}

      {!isInCart(data) && (
        <button
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          onClick={() => {
            console.log('** Add to cart clicked **')
            addToCart(data)
            onProductAdded()
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
