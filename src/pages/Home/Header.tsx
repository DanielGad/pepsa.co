import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Image from '../../assets/images/Image_01.png';
import Image2 from '../../assets/images/Image_02.png';
import Image3 from '../../assets/images/Image_03.png';
import Image4 from '../../assets/images/Image_04.png';
import trusted1 from '../../assets/images/trusted_01.png';
import trusted2 from '../../assets/images/trusted_02.png';
import trusted3 from '../../assets/images/trusted_03.png';
import trusted4 from '../../assets/images/trusted_04.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="relative text-white py-16 sm:py-20 md:py-24 px-2 sm:px-4 md:px-10 overflow-hidden header-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="max-w-7xl mx-auto"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="text-center md:text-left md:ml-14 fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#e5edcd]">
              Everyday Needs and <br /> Delivery to Your Doorstep
              </h1>
              <p className="text-base sm:text-lg mb-4 sm:mb-8 text-white/90 max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0">
              The Marketplace for shopping and on-demand delivery services within your city!
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 sm:mb-12">
                <Link to="/">
                <button className="bg-white text-[#a00000] font-semibold px-6 py-2 rounded-md cursor-pointer hover:bg-[#a00000] border hover:border-1 hover:text-white hover:border-white transition">
                  Shop Now
                </button>
                </Link>
                <Link to="/">
                <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-[#a00000]  transition cursor-pointer ">
                  Send Item
                </button>
                </Link>
              </div>
              <div className="text-sm text-center md:text-left fade-in-up">
                <p className="text-[rgb(163,149,255)] text-lg sm:text-[20px] font-semibold mb-1">Trusted by Leading Brands</p>
                <div className="flex flex-wrap justify-center md:justify-start items-center mt-1 gap-2 sm:gap-4">
                  <img src={trusted1} alt="trusted 1" className="h-8 sm:h-12 md:h-10 w-auto" />
                  <img src={trusted2} alt="trusted 2" className="h-8 sm:h-12 md:h-10 w-auto" />
                  <img src={trusted3} alt="trusted 3" className="h-8 sm:h-12 md:h-10 w-auto" />
                  <img src={trusted4} alt="trusted 4" className="h-8 sm:h-12 md:h-10 w-auto" />
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start fade-in-up">
              <div className="relative">
                <div className="rounded-full p-1 sm:p-2 relative z-10 md:ml-10">
                  <img
                    src={Image}
                    alt="Happy shopper"
                    className="w-40 sm:w-60 md:w-80 lg:w-[380px] object-cover rounded-full shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full border border-white/30 z-0 animate-pulse scale-113"></div>
                  <div className="absolute inset-0 rounded-full border border-white/30 z-0 scale-[1.3]"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="text-center md:text-left md:ml-14 fade-in-left">
              <p className="text-xs sm:text-sm uppercase mb-2 sm:mb-4 opacity-80">Delivery Business Made Easy</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#e5edcd]">
              Operate a logistics business <br /> with Pepsa Dispatch
              </h1>
              <p className="text-base sm:text-lg mb-4 sm:mb-8 text-white/90 max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0">
              Pepsa Dispatch connects logistics vendors to thousands of daily delivery orders, ensuring steady income, rider tracking, and flexible revenue sharing across cities.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 sm:mb-12">
              <Link to="https://pepsa.co/get-started" rel="noopener noreferrer">
                <button className="bg-white text-[#a00000] font-semibold px-6 py-2 rounded-md cursor-pointer hover:bg-[#a00000] hover:text-white border hover:border-1  transition">
                  Register Now
                </button>
                </Link>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 sm:h-12" />
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-start fade-in-left">
              <div className="relative">
                <div className="rounded-full p-1 sm:p-2 relative z-10 md:ml-10">
                  <img
                    src={Image2}
                    alt="Happy shopper"
                    className="w-40 sm:w-60 md:w-80 lg:w-[380px] object-cover rounded-full shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full border border-white/30 z-0 animate-pulse scale-113"></div>
                  <div className="absolute inset-0 rounded-full border border-white/20 z-0 scale-[1.3]"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="text-center md:text-left md:ml-14 fade-in-right">
              <p className="text-xs sm:text-sm uppercase mb-2 sm:mb-4 opacity-80">Best Delivery Tools for Vendors</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#e5edcd]">
              Unlock your business growth <br /> with our Plug All-in-One tool
              </h1>
              <p className="text-base sm:text-lg mb-4 sm:mb-8 text-white/90 max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0">
              Digitise your business with our management tool, payment system, quick access to customers, and fast delivery on Plug.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 sm:mb-12">
                <Link to={"https://plug.pepsa.co/"} rel="noopener noreferrer">
                <button className="bg-white text-[#a00000] font-semibold px-6 py-2 rounded-md cursor-pointer hover:bg-[#a00000] hover:text-white hover:border-[white] border hover:border-1 transition">
                  Plug-in Now
                </button>
                </Link>
                <Link to={"https://plug.pepsa.co/"} rel="noopener noreferrer">
                <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-[#a00000] transition cursor-pointer ">
                  Learn About Plug
                </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-start fade-in-right">
              <div className="relative">
                <div className="rounded-full p-1 sm:p-2 relative z-10 md:ml-10">
                  <img
                    src={Image3}
                    alt="Happy shopper"
                    className="w-40 sm:w-60 md:w-80 lg:w-[380px] object-cover rounded-full shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full border border-white/30 z-0 animate-pulse scale-113"></div>
                  <div className="absolute inset-0 rounded-full border border-white/20 z-0 scale-[1.3]"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="text-center md:text-left md:ml-14 fade-in-bottom">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#e5edcd]">
              Buy and get fast delivery, <br />access payment solution <br />and pay bills.
              </h1>
              <p className="text-base sm:text-lg mb-4 sm:mb-8 text-white/90 max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0">
                Discover and order from your preferred vendors, plugs, and stores. Enjoy hassle-free buying and last-mile delivery of everyday items.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 sm:mb-12">
                <Link to="https://pepsa.co/get-started" rel="noopener noreferrer">
                <button className="bg-white text-[#a00000] font-semibold px-6 py-2 rounded-md cursor-pointer hover:bg-[#a00000] hover:text-white hover:border-[white] border hover:border-1 transition">
                  Get Started
                </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-start fade-in-bottom">
              <div className="relative">
                <div className="rounded-full p-1 sm:p-2 relative z-10 md:ml-10">
                  <img
                    src={Image4}
                    alt="Happy shopper"
                    className="w-40 sm:w-60 md:w-80 lg:w-[380px] object-cover rounded-full shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full border border-white/30 z-0 animate-pulse scale-113"></div>
                  <div className="absolute inset-0 rounded-full border border-white/20 z-0 scale-[1.3]"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Header;
