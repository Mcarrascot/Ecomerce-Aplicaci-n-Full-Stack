import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="text-white bg-black">
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center text-center">
          <div className="py-8">
            <h1 className="text-xl md:text-3xl font-bold mb-3">
              BLOOM
            </h1>
            
          </div>

          <div className="py-8">
            <div className="">
              <div className="flex justify-center items-center gap-3">
                <FaLocationArrow />
                <p>Concepcion, Chile</p>
              </div>
              <div className="flex justify-center items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+96 123456789</p>
              </div>
            </div>
          </div>

          <div className="py-8">
            <div className="flex justify-center items-center gap-5">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
