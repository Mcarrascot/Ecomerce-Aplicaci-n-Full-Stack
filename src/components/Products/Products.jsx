import React from "react";
import Img1 from "../../assets/dans_blue.jpg";
import Img2 from "../../assets/dans_green.jpg";
import Img3 from "../../assets/dans_grey.jpg";
import Img4 from "../../assets/dans_pink.jpg";
import Img5 from "../../assets/filer.jpg";
import Img6 from "../../assets/pink_box.jpg";
import Img7 from "../../assets/dans_white.jpg";
import Img8 from "../../assets/white_box.jpg";
import Img9 from "../../assets/grey_powder.jpg";
import Img10 from "../../assets/case.jpg";
import Img11 from "../../assets/white_purple.jpg";
import Img12 from "../../assets/black_3.jpg";
import Img13 from "../../assets/black_blue_box.jpg";
import Img14 from "../../assets/black_top_coat.jpg";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Dans' color gel",
    rating: 5.0,
    color: "color #031",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Dans' color gel",
    rating: 4.5,
    color: "color #041",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Flash Top",
    rating: 4.7,
    color: "top coat",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Slim Top",
    rating: 4.4,
    color: "top coat",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Go Nails File",
    rating: 4.5,
    color: "file 100",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Bluesky Uv Lamp",
    rating: 4.4,
    color: "uv lamp-40wt",
    aosDelay: "600",
  },
  {
    id: 7,
    img: Img7,
    title: "Top & Base",
    rating: 4.5,
    color: "top-base coat",
    aosDelay: "800",
  },
  {
    id: 8,
    img: Img8,
    title: "Bluesky drill",
    rating: 4.5,
    color: "drill 4000-rev",
    aosDelay: "800",
  },
  {
    id: 9,
    img: Img9,
    title: "Holo Powder",
    rating: 4.5,
    color: "bluesky hologram powder",
    aosDelay: "800",
  },
  {
    id: 10,
    img: Img10,
    title: "Bluesky Case",
    rating: 4.4,
    color: "case",
    aosDelay: "600",
  },
  {
    id: 11,
    img: Img11,
    title: "GoNails oil",
    rating: 4.5,
    color: "cuticle oil",
    aosDelay: "800",
  },
  {
    id: 12,
    img: Img12,
    title: "Bluesky brush",
    rating: 4.5,
    color: "four brushes",
    aosDelay: "800",
  },
  {
    id: 13,
    img: Img13,
    title: "Bluesky uv-lamp",
    rating: 4.5,
    color: "black uv-lamp",
    aosDelay: "800",
  },
  {
    id: 14,
    img: Img14,
    title: "Bluesky top coat",
    rating: 4.5,
    color: "no-wipe top coat",
    aosDelay: "800",
  },
  {
    id: 15,
    img: Img4,
    title: "Slim Top",
    rating: 4.5,
    color: "top coat",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data._id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
