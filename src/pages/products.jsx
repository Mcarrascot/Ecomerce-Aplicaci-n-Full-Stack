import Img1 from "../assets/dans_blue.jpg";
import Img2 from "../assets/dans_green.jpg";
import Img3 from "../assets/dans_grey.jpg";
import Img4 from "../assets/dans_pink.jpg";
import Img5 from "../assets/filer.jpg";
import Img6 from "../assets/pink_box.jpg";
import Img7 from "../assets/dans_white.jpg";
import Img8 from "../assets/white_box.jpg";
import Img9 from "../assets/grey_powder.jpg";
import Img10 from "../assets/case.jpg";
import Img11 from "../assets/white_purple.jpg";
import Img12 from "../assets/black_3.jpg";
import Img13 from "../assets/black_blue_box.jpg";
import Img14 from "../assets/black_top_coat.jpg";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from "../components/Products/ProductCard";
import { useContext, useEffect } from "react";
import ProductContext from "../context/Product/ProductContext";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    rating: 5.0,
    price: 12000,
  },
  {
    id: 2,
    img: Img2,
    rating: 4.5,
    price: 12000,
  },
  {
    id: 3,
    img: Img3,
    title: "Flash Top",
    rating: 4.7,
    price: 14000,
  },
  {
    id: 4,
    img: Img4,
    title: "Slim Top",
    rating: 4.4,
    price: 14000,
  },
  {
    id: 5,
    img: Img5,
    title: "Go Nails File",
    rating: 4.5,
    price: 1000,
  },
  {
    id: 6,
    img: Img6,
    title: "Bluesky Uv Lamp",
    rating: 4.4,
    price: 45000,
  },
  {
    id: 7,
    img: Img7,
    title: "Top & Base",
    rating: 4.5,
    price: 14000,
  },
  {
    id: 8,
    img: Img8,
    title: "Bluesky drill",
    rating: 4.5,
    price: 60000,
  },
  {
    id: 9,
    img: Img9,
    title: "Holo Powder",
    rating: 4.5,
    price: 2000,
  },
  {
    id: 10,
    img: Img10,
    title: "Bluesky Case",
    rating: 4.4,
    price: 12000,
  },
  {
    id: 11,
    img: Img11,
    title: "GoNails oil",
    rating: 4.5,
    price: 6000,
  },
  {
    id: 12,
    img: Img12,
    title: "Bluesky brush",
    rating: 4.5,
    price: 15000,
  },
  {
    id: 13,
    img: Img13,
    title: "Bluesky uv-lamp",
    rating: 4.5,
    price: 45000,
  },
  {
    id: 14,
    img: Img14,
    title: "Bluesky top coat",
    rating: 4.5,
    price: 12000,
  },
  {
    id: 15,
    img: Img4,
    title: "Slim Top",
    rating: 4.5,
    price: 14000,
  },
];

const ProductsPage = () => {
  const notify = () => toast.success('Added to cart!', {
    position: "bottom-right",
    autoClose: 400,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
    transition: Bounce,
  });

  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, [])
  console.log(products)
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="colored"
        transition:Bounce
      />

      <div className="mt-14 mb-12">
        <div className="">
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">
              All available
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Products
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {products.map((data) => (
                <ProductCard key={data._id} data={data} onProductAdded={() => notify()} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
