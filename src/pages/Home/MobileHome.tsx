import { useEffect } from 'react';
import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';
import BuyImg from '../../assets/images/Group_Pepsa.png';
import SellImg from '../../assets/images/Group_Cart.png';
import Dispatch from '../../assets/images/Pepsa_Dispatch_App.png';
import Frame from '../../assets/images/Frame.png';
import PepsaLogo from '../../assets/images/Group-1000002747.png';
import AppStore from '../../assets/images/App_Store.png';
import MobileApp from '../../assets/images/App_Container.png';
import Partner1 from '../../assets/images/GSE_LOGO.png';
import Partner2 from '../../assets/images/I2M_LOGO.png';
import Partner3 from '../../assets/images/RISA_Logo.png';
import Partner4 from '../../assets/images/UK_AID_LOGO.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { revealOnScroll } from '../../lib/ScrollAnimation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'; 
import { Link } from 'react-router-dom';


const MobileHome: React.FC = () => {
    useEffect(() => {
      revealOnScroll();
    }, []);

    const { ref: usersRef, inView: usersInView } = useInView({ triggerOnce: false });
const { ref: txRef, inView: txInView } = useInView({ triggerOnce: false });
    
  const partners = [
    { src: Partner1, alt: "GSE Logo" },
    { src: Partner2, alt: "I2M Logo" },
    { src: Partner3, alt: "RISA Logo" },
    { src: Partner4, alt: "UK AID Logo" },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up, .zoom-in, .slide-in-bottom');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <MobileHeader />

      <section className="fade-in-up py-12 text-3xl w-[80%] text-center mx-auto font-bold tracking-tight leading-snug">
        Custom Solutions for Sales, Purchase and On-demand Delivery 
      </section>

      {/* Buy with Pepsa */}
      <div className="zoom-in flex flex-row gap-4 items-center justify-end bg-[#a00000] rounded-2xl text-white pl-5 pt-5 w-[80%] mx-auto">
        <div className="font-bold text-3xl mr-4 max-w-xs">Buy with Pepsa</div>
        <img src={BuyImg} alt="Buy with Pepsa" className="w-2/5 min-w-[150px] max-w-[300px] object-contain" />
      </div>
      <div className="fade-in-up flex flex-col gap-4 items-start bg-[#f3f7fa] rounded-2xl text-black font-medium mt-4 pl-5 pt-5 w-[80%] mx-auto mb-5">
        <p className="w-[95%] justify-center mx-auto">
          Discover and order from your favourite local vendors, plugs, and stores. Enjoy hassle-free shopping and last-mile delivery of everyday items.
        </p>
        <Link to="/" rel="noopener noreferrer">
        <button className="cursor-pointer bg-[#a00000] text-white mt-3 hover:bg-white hover:text-[#a00000] border px-10 py-2 rounded-2xl mb-3">
          Shop Now
        </button>
        </Link>
      </div>

      {/* Sell on Plug */}
      <div className="zoom-in flex flex-row gap-4 items-center justify-end bg-[#fbe7ea] rounded-2xl text-[#a00000] pl-5 pt-5 w-[80%] mx-auto">
        <div className="font-bold text-3xl mr-4 max-w-xs">Sell on Plug</div>
        <img src={SellImg} alt="Sell on Plug" className="w-2/5 min-w-[150px] max-w-[300px] object-contain" />
      </div>
      <div className="fade-in-up flex flex-col gap-4 items-start bg-[#f3f7fa] rounded-2xl text-black font-medium mt-4 pl-5 pt-5 w-[80%] mx-auto mb-5">
        <p className="w-[95%] justify-center mx-auto">
          Get everything to manage and grow your business on Plug. Free e-commerce page, access to delivery, business bank account and manage inventories, sales, orders, and customers
        </p>
        <Link to="https://plug.pepsa.co/" rel="noopener noreferrer">
        <button className="cursor-pointer bg-[#a00000] text-white mt-3 hover:bg-white hover:text-[#a00000] border px-10 py-2 rounded-2xl mb-3">
          Plug-in Now
        </button>
        </Link>
      </div>

      {/* Dispatch */}
      <div className="zoom-in flex flex-row gap-4 items-center justify-end bg-[#e2defe] rounded-2xl text-[#a00000] pl-5 pt-5 w-[80%] mx-auto">
        <div className="font-bold text-3xl mr-[-10px] max-w-xs">Pepsa Dispatch</div>
        <img src={Dispatch} alt="Pepsa Dispatch" className="w-2/5 min-w-[150px] max-w-[300px] object-contain" />
      </div>
      <div className="fade-in-up flex flex-col gap-4 items-start bg-[#f3f7fa] rounded-2xl text-black font-medium mt-4 pl-5 pt-5 w-[80%] mx-auto mb-15">
        <p className="w-[95%] justify-center mx-auto">
          Start a logistics business. Onboard riders, get delivery orders, and track drivers activities. Increase earnings with our gigs and simultaneously fulfil your orders.
        </p>
        <Link to="https://dispatch.pepsa.co/" rel="noopener noreferrer">
        <button className="cursor-pointer bg-[#a00000] text-white mt-3 hover:bg-white hover:text-[#a00000] border px-10 py-2 rounded-2xl mb-3">
          Register Now
        </button>
        </Link>
      </div>

      {/* About Us */}
      <section className="slide-in-bottom flex flex-col items-center justify-center bg-[#a00000] text-white mt-4 pl-5 pt-5 mb-15">
        <img src={Frame} alt="Frame" width={'50%'} className="mt-10" />
        <h1 className="text-2xl font-bold mt-10 mb-6">About Us</h1>
        <p className="w-[95%] mx-auto mb-10">
          We are a people-centric technology company committed to developing innovative solutions that make life and commerce engagement easier, with customers’ preferences in mind.
        </p>
        <div ref={usersRef}>
            <h1 className='text-4xl text-[rgb(163,149,255)] mb-1 font-bold'>
              {usersInView ? <CountUp end={3000} duration={2} separator="," /> : '0'}+
            </h1>
            <p>Active Users</p>
          </div>

          {/* Transactions */}
          <div ref={txRef}>
            <h1 className='text-4xl text-[rgb(163,149,255)] mt-8 mb-1 font-bold'>
              {txInView ? <CountUp end={350000} duration={3} separator="," /> : '0'}+
            </h1>
            <p>Transactions</p>
          </div>
        <h1 className="font-bold mt-10 text-3xl mx-auto">Join Pepsa.co Today</h1>
        <Link to="/about-us" rel="noopener noreferrer">
        <button className="cursor-pointer bg-white border text-black mt-5 hover:bg-[#a00000] hover:text-white px-10 py-2 rounded-2xl mb-15">
          Know more
        </button>
        </Link>
      </section>

      {/* App Section */}
      <section className="fade-in-up flex flex-col items-center justify-center text-black mt-4 pl-5 pt-5 mb-15">
        <div className="w-full md:w-auto md:max-w-md flex justify-center flex-1">
          <div className="bg-[#a50707] rounded-full flex items-center justify-center w-75 h-75">
            <img src={MobileApp} alt="Pepsa app mockup" className="w-100 h-auto object-contain" />
          </div>
        </div>
        <img src={PepsaLogo} alt="Pepsa Logo" className="mt-10 w-60 mx-auto" />
        <h3 className="text-center font-bold text-2xl mt-5">Everyday Needs Delivered <br />to your doorstep</h3>
        <div className="flex flex-col gap-4 justify-center mt-5">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12 sm:h-10" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={AppStore} alt="App Store" className="w-40 cursor-pointer" />
          </a>
        </div>
      </section>

      {/* Partner Carousel */}
      <div className="w-full flex items-center justify-center">
        <section className="fade-in-up w-full py-10 text-center">
          <div className="w-full flex flex-col items-center">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="partner-carousel w-[240px]"
            >
              {partners.map(partner => (
                <SwiperSlide key={partner.alt}>
                  <div className="flex justify-center items-center h-60">
                    <img src={partner.src} alt={partner.alt} className="h-50 w-auto max-w-[220px] object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <style>{`
            .partner-carousel .swiper-pagination-bullet {
              background: rgba(160,0,0,0.2);
              width: 8px;
              height: 8px;
              margin: 0 4px !important;
            }
            .partner-carousel .swiper-pagination-bullet-active {
              background: #a00000;
              width: 18px;
              border-radius: 4px;
            }
          `}</style>
        </section>
      </div>

      <MobileFooter />
    </div>
  );
};

export default MobileHome;
