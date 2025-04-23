import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import Image from '../../assets/images/Image_01.png';
import Image2 from '../../assets/images/Image_02.png';
import Image3 from '../../assets/images/Image_03.png';
import Image4 from '../../assets/images/Image_04.png';
import { Link } from 'react-router-dom';

const MobileHeader = () => {
  return (
    <div className="text-white mt-[-80px] header-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        className="mobile-header-swiper"
      >
        {[
          {
            title: "Everyday Needs and Delivery to Your Doorstep",
            subtitle: "Get 20% off Your First Order",
            text: "The Marketplace for shopping and on-demand delivery services within your city!",
            img: Image,
            btn1: "Shop Now",
            btn2: "Send Item",
            link1: "/",
            link2: "/"
          },
          {
            title: "Operate a Logistics Business with Pepsa Dispatch",
            subtitle: "Delivery Business Made Easy",
            text: "Start a last-mile logistics business. Onboard riders, get delivery orders, and track drivers activities. Increase earnings with our gigs and simultaneously fulfil your orders.",
            img: Image2,
            btn1: "Register Now",
            btn2: <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10 zoom-in" />,
            link1: "https://pepsa.co/get-started",
            link2: "/"
          },
          {
            title: "Unlock Your Business Growth with All-in-One Tool",
            subtitle: "Best Business Tools for Vendors",
            text: "Get a free e-commerce page, business management tool, bank account, flexible payment gateway, quick access to customers, and fast delivery on Plug.",
            img: Image3,
            btn1: "Plug-in Now",
            btn2: "Learn About Plug",
            link1: "https://plug.pepsa.co/",
            link2: "https://plug.pepsa.co/",
          },
          {
            title: "Buy and get fast delivery, access payment solution and pay bills",
            subtitle: "Get 20% off Your First Order",
            text: "Discover and order from your preferred vendors, plugs, and stores. Enjoy hassle-free buying and last-mile delivery of everyday items.",
            img: Image4,
            btn1: "Shop Now",
            btn2: "Send Item",
            link1: "/",
            link2: "/"
          }
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="px-4 sm:px-6 py-8 sm:py-10 w-full max-w-sm mx-auto text-center flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full inline-block px-4 py-1 mb-4 fade-in-up">
                <p className="text-sm font-medium">{slide.subtitle}</p>
              </div>
              <h1 className="text-2xl font-bold leading-snug sm:leading-tight mb-4 text-[#e5edcd] fade-in-up">
                {slide.title.split('<br />').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h1>
              <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base fade-in-up">{slide.text}</p>

              <div className="relative flex items-center justify-center mx-auto mb-4 slide-in-bottom">
                <div className="rounded-full p-1 sm:p-2 relative z-10 mt-15 mb-14">
                  <img
                    src={slide.img}
                    alt="Slide visual"
                    className="w-56 sm:w-58 md:w-74 object-cover rounded-full shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full border border-white/30 z-0 animate-pulse scale-113"></div>
                  <div className="absolute inset-0 rounded-full border border-white/30 z-0 scale-[1.3]"></div>
                </div>
              </div>

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center mb-6 zoom-in">
              {/* Button 1 */}
              <Link to={slide.link1} rel="noopener noreferrer">
                <button className="w-[200px] h-[48px] text-sm sm:text-base bg-white text-[#a2151b] hover:bg-[#a2151b] hover:text-white border hover:border-white font-semibold py-3 px-4 cursor-pointer rounded-lg transition-colors flex items-center justify-center">
                  {slide.btn1}
                </button>
              </Link>

              {/* Button 2 */}
              {typeof slide.btn2 === 'string' ? (
                <Link to={slide.link2} rel="noopener noreferrer">
                  <button className="w-[200px] h-[48px] text-sm sm:text-base border-white text-white font-semibold py-3 px-4 cursor-pointer rounded-lg transition-colors border hover:bg-white hover:text-[#a2151b] flex items-center justify-center">
                    {slide.btn2}
                  </button>
                </Link>
              ) : (
                <Link to={slide.link2} rel="noopener noreferrer">
                  <div className="w-[200px] h-[48px]  rounded-lg cursor-pointer transition-colors flex items-center justify-center">
                    {slide.btn2}
                  </div>
                </Link>
              )}
            </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .mobile-header-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5);
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
        }
        .mobile-header-swiper .swiper-pagination-bullet-active {
          background: white;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default MobileHeader;
