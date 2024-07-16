import Image1 from "../../assets/hero/nail_polish.png";
import Image2 from "../../assets/hero/nail_products.png";
import Image3 from "../../assets/hero/nail_art.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 50% off on all Nail Polish",
    description:
      "Explore a vibrant spectrum of colors. Dive into our sale for your chance to adorn your nails with luxury at unbeatable prices.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on Nail Care Products",
    description:
      "Nourish, strengthen, and beautify your nails. Discover our exclusive deals on nail care essentials designed to give you the perfect manicure.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Nail Art Supplies",
    description:
      "Unleash your creativity with our extensive range of nail art supplies. From dazzling decals to vibrant varnishes, everything you need for stunning nail designs is here.",
  },
];
const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center hero-section dark:text-white duration-200 ">
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-20 ml-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
