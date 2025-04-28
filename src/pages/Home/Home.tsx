import Header from "./Header";
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
import Footer from "./Footer";
import { useEffect } from "react";
import { revealOnScroll } from "../../lib/ScrollAnimation";
import CountUp from 'react-countup'; 
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";


const Home = () => {

  useEffect(() => {
    revealOnScroll();
  }, []);


  const { ref: usersRef, inView: usersInView } = useInView({ triggerOnce: false });
  const { ref: txtRef, inView: txInView } = useInView({ triggerOnce: false });


  return (
    <div className="overflow-x-hidden">
      <Header />

      <section className={`bg-white text-black py-12 sm:py-14 md:py-18 lg:py-14 text-3xl sm:text-4xl md:text-5xl lg:text-5xl w-[95%] sm:w-[90%] md:w-[80%] text-center mx-auto font-bold tracking-tight leading-snug fade-in-up`}>
        Custom Solutions for Sales, Purchase and <br /> On-demand Delivery 
      </section>

      {/* Services Section */}
      <section className="space-y-10 sm:space-y-14 md:space-y-16 px-2 sm:px-6 md:px-16 lg:px-40 py-8 sm:py-12 md:py-16">
        {[{
            bg: "bg-[#a00000] text-white",
            img: BuyImg,
            alt: "Buy with Pepsa illustration",
            title: "Buy with Pepsa",
            text: `Discover and order from your favourite local vendors, plugs, and stores. Enjoy hassle-free shopping and last-mile delivery of everyday items.`,
            btnColor: "bg-white text-[#a00000]",
            btnHover: "hover:bg-[#a00000] hover:text-white",
            btnBorder: "border",
            btnText: "Shop Now",
            link: '/'
          },
          {
            bg: "bg-[#fcecec] text-[#a00000]",
            img: SellImg,
            alt: "Sell on Plug illustration",
            title: "Sell on Plug",
            text: `Get everything to manage and grow your business on Plug. Free e-commerce page, access to delivery, business bank account and manage  inventories, sales, orders, and customers.`,
            btnColor: "bg-[#a00000] text-white",
            btnHover: "hover:bg-white hover:text-[#a00000] hover:border-[#a00000]",
            btnBorder: "border",
            btnText: "Plug-In-Now",
            link: 'https://plug.pepsa.co/'
          },
          {
            bg: "bg-[#E2DEFE] text-[#a00000]",
            img: Dispatch,
            alt: "Pepsa Dispatch illustration",
            title: "Pepsa Dispatch",
            text: `Start a logistics business. Onboard riders, get delivery orders, and track drivers activities. Increase earnings with our gigs and simultaneously fulfil your orders.`,
            btnColor: "bg-white text-[#a00000]",
            btnHover: "hover:bg-[#a00000] hover:text-white",
            btnBorder: "border",
            btnText: "Shop Now",
            link: 'https://dispatch.pepsa.co/'
          }
        ].map((card) => (
          <div
            key={card.title}
            className={`${card.bg} rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-10 shadow-lg px-4 sm:px-6 md:px-10 sm:py-8 md:py-0 relative overflow-hidden`}
          >
            <div className="max-w-[90vw] sm:max-w-md py-3 sm:py-6 flex-1">
              <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 max-w-[400px] md:max-w-[500px] fade-in-left`}>
                {card.title}
              </h2>
              <p className={`mb-4 sm:mb-6 md:mb-8 leading-relaxed text-base sm:text-lg fade-in-right`}>
                {card.text}
              </p>
              <Link to={card.link} rel="noopener noreferrer">
              <button
                className={`${card.btnColor} ${card.btnBorder} ${card.btnHover} font-semibold px-4 py-2 rounded-md transform transition-transform duration-900 ease-in-out hover:scale-110 hover:brightness-110 cursor-pointer`}
              >
                {card.btnText}
              </button>
              </Link>
            </div>

            <div
              className={`relative flex-shrink-0 ${card.title === "Pepsa Dispatch" ? "absolute top-15 right-[-40px] -mt-20" : ""}`}
              style={{ alignSelf: "flex-end" }}
            >
              <img
                src={card.img}
                alt={card.alt}
                className="w-[420px] object-contain transition-transform duration-900 ease-in-out transform hover:scale-90 zoom-in"
              />
            </div>
          </div>
        ))}
      </section>

      {/* About Us Section */}
      <section className="bg-[#a50707] text-white px-2 sm:px-6 md:px-20 py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <div className="relative w-[180px] sm:w-[260px] md:w-[350px] h-[180px] sm:h-[260px] md:h-[350px] transition-transform duration-900 ease-in-out transform hover:scale-90">
              <img
                src={Frame}
                alt="About visual"
                className="w-full h-full object-cover rounded-lg shadow-lg relative z-10 flip-in"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black opacity-20 z-20 pointer-events-none" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 fade-in-right">About us</h2>
            <p className="mb-4 sm:mb-6 max-w-xs sm:max-w-sm md:max-w-[350px] fade-in-up">
            We are a people-centric technology company committed to developing innovative solutions that make life and commerce engagement easier, with customers’ preferences in mind.
            </p>
            <div className="flex gap-6 justify-center font-bold mb-6 text-3xl" >
              <div ref={usersRef}>
                <span className="text-[rgb(163,149,255)]">
                {usersInView ? <CountUp end={3000} duration={2} separator="," /> : '0'}+
                </span>
                <p className="text-xs">Active Users</p>
              </div>
              <div ref={txtRef}>
                <span className="text-[rgb(163,149,255)]">
                {txInView ? <CountUp end={350000} duration={3} separator="," /> : '0'}+
                </span>
                <p className="text-xs">Transactions</p>
              </div>
            </div>
            <div>
              <p className="mb-2 font-medium text-2xl">Join Pepsa.co Today</p>
              <Link to="/about-us">
              <button className="bg-white text-[#a50707] px-4 sm:px-6 py-2 rounded-2xl hover:bg-[#a50707] hover:text-white border-2 transition cursor-pointer drop-in">
                Know More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More Info & Partners */}
      <section className="bg-white px-2 sm:px-6 md:px-20 py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center items-center gap-6 sm:gap-10">
          
          <div className="w-full md:w-auto md:max-w-md text-center md:text-left flex-1 mb-6 md:mb-0">
            <img src={PepsaLogo} alt="Pepsa Logo" className="w-70 mx-auto md:mx-0 mb-2 fade-in-up" />
            <p className="text-[#a50707] mb-2 sm:mb-6 font-bold text-lg sm:text-2xl">
              Everyday Needs Delivered to <br />your doorstep
            </p>
            <div className="flex gap-2 sm:gap-4 justify-center md:justify-start">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 sm:h-10 fade-in-up" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={AppStore} alt="App Store" className="w-20 sm:w-32 cursor-pointer fade-in-up" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-auto md:max-w-md flex justify-center flex-1">
            <div className="bg-[#a50707] rounded-full flex items-center justify-center w-78 h-78 ">
              <img
                src={MobileApp}
                alt="Pepsa app mockup"
                className="w-78  h-auto object-contain zoom-in"
              />
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 ">
          <img src={Partner1} alt="Partner GSE" className="h-25 w-auto object-contain zoom-in" />
          <img src={Partner2} alt="Partner I2M" className="h-25 w-auto object-contain zoom-in" />
          <img src={Partner3} alt="Partner RISA" className="h-25 w-auto object-contain zoom-in" />
          <img src={Partner4} alt="Partner UKAID" className="h-25 w-auto object-contain zoom-in" />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
