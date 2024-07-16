import React from "react";
import Img1 from "../../assets/nail_polish/dans_grey_no_bg.png";
import Img2 from "../../assets/nail_polish/dans_pink_no_bg.png";
import Img3 from "../../assets/nail_polish/dans_white_no_bg.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Flash Top",
    description:
      "Top coat without an inhibition layer, featuring light-reflective microglitters.",
  },
  {
    id: 2,
    img: Img2,
    title: "Slim Top",
    description:
      "This top coat is extra fine and extra shiny, perfect for acrylic and poly gel nails.",
  },
  {
    id: 3,
    img: Img3,
    title: "Top & Base",
    description:
      "It functions as both a base coat and a top coat.",
  },
];
const TopProducts = () => {
  return (
    <div>
      <div className="mt-20">
        {/* Header section */}
        <div className="text-center mb-20 mx-auto">
          <p data-aos="fade-up" className="text-md mb-2 text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl mb-5 font-bold">
            Most Popular Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
              Discover our top-rated nail polishes! Each shade is expertly crafted for lasting beauty and brilliance, ensuring your nails always make a statement.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
