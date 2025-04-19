// import { Context } from '../../components/Context';
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
// import { useContext } from 'react';
import { useEffect, useState } from "react";

const Home = () => {
  // const { isVisible } = useContext(Context);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300); // delay before showing

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className={`bg-white text-black py-12 sm:py-14 md:py-18 lg:py-14 text-3xl sm:text-4xl md:text-5xl lg:text-5xl w-[95%] sm:w-[90%] md:w-[80%] text-center mx-auto font-bold tracking-tight leading-snug slide-in left-slide-in ${visible ? "visible" : ""}`}>
      
        Custom Solutions for Sale, Purchase and <br /> On-demand Delivery 
      </section>

      {/* Services Section */}
      <section className="space-y-10 sm:space-y-14 md:space-y-16 px-2 sm:px-6 md:px-16 lg:px-40 py-8 sm:py-12 md:py-16">
        {/* Card Component */}
        {[
          {
            bg: "bg-[#a00000] text-white",
            img: BuyImg,
            alt: "Buy with Pepsa illustration",
            title: "Buy with Pepsa",
            text: `Discover and order from your favourite local vendors, plugs, and stores. Enjoy hassle-free shopping and last-mile delivery of everyday items.`,
            btnColor: "bg-white text-[#a00000]",
            btnHover: "hover:bg-[#a00000] hover:text-white",
            btnBorder: "border",
            btnText: "Shop Now"
          },
          {
            bg: "bg-[#fcecec] text-[#a00000]",
            img: SellImg,
            alt: "Sell with Plug illustration",
            title: "Sell with Plug",
            text: `Get everything to manage and grow your business on Plug. Free e-commerce page, access to delivery, bank account, manage inventories, sales, orders, and customers.`,
            btnColor: "bg-[#a00000] text-white",
            btnHover: "hover:bg-white hover:text-[#a00000] hover:border-[#a00000]",
            btnBorder: "border",
            btnText: "Plug-In-Now"
          },
          {
            bg: "bg-[#E2DEFE] text-[#a00000]",
            img: Dispatch,
            alt: "Pepsa Dispatch illustration",
            title: "Pepsa Dispatch",
            text: `Discover and order from your favourite local vendors, plugs, and stores. Enjoy hassle-free shopping and last-mile delivery of everyday items.`,
            btnColor: "bg-white text-[#a00000]",
            btnHover: "hover:bg-[#a00000] hover:text-white",
            btnBorder: "border",
            btnText: "Shop Now"
          }
        ].map((card) => (
          <div
          key={card.title}
          className={`${card.bg} rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-10 shadow-lg px-4 sm:px-6 md:px-10 sm:py-8 md:py-0 relative overflow-hidden`}
>
  {/* Text Section */}
  <div className="max-w-[90vw] sm:max-w-md py-3 sm:py-6 flex-1">
    <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 max-w-[400px] md:max-w-[500px] slide-in left-slide-in ${visible ? "visible" : ""}`}>
            {card.title}
          </h2>
          <p className={`mb-4 sm:mb-6 md:mb-8 leading-relaxed text-base sm:text-lg slide-in right-slide-in ${visible ? "visible" : ""}`}>
            {card.text}
          </p>
          <button
            className={`${card.btnColor} ${card.btnBorder} ${card.btnHover} font-semibold px-4 py-2 rounded-md transform transition-transform duration-900 ease-in-out hover:scale-110 hover:brightness-110 cursor-pointer`}
          >
            {card.btnText}
          </button>
        </div>

        {/* Image wrapper aligned to far right & sticking out */}
        <div
          className={`relative flex-shrink-0 ${
            card.title === "Pepsa Dispatch" ? "absolute top-15 right-[-40px] -mt-20" : ""
          }`}
          style={{ alignSelf: "flex-end" }}
        >
          <img
            src={card.img}
            alt={card.alt}
            className="w-[420px] object-contain transition-transform duration-900 ease-in-out transform hover:scale-90"
            
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
                className="w-full h-full object-cover rounded-lg shadow-lg relative z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black opacity-20 z-20 pointer-events-none" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">About us</h2>
            <p className="mb-4 sm:mb-6 max-w-xs sm:max-w-sm md:max-w-[350px]">
              We are a people-centric technology company committed to developing innovative
              solutions that make life and commerce engagement easier, with customers’
              preferences in mind.
            </p>
            <div className="flex gap-6 sm:gap-8 justify-center md:justify-start font-semibold text-base sm:text-xl mb-2 sm:mb-4">
              <div>
                <span className="text-[rgb(163,149,255)]">3,000 +</span>
                <p className="text-xs">Active Users</p>
              </div>
              <div>
                <span className="text-[rgb(163,149,255)]">350,000 +</span>
                <p className="text-xs">Transactions</p>
              </div>
            </div>
            <div>
              <p className="mb-2 font-medium">Join Pepsa.co Today</p>
              <button className="bg-white text-[#a50707] px-4 sm:px-6 py-2 rounded-2xl hover:bg-[#a50707] hover:text-white border-2 transition cursor-pointer">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* More Info & Partners */}
      <section className="bg-white px-2 sm:px-6 md:px-20 py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center items-center gap-6 sm:gap-10">
          {/* Left Text */}
          <div className="w-full md:w-auto md:max-w-md text-center md:text-left flex-1 mb-6 md:mb-0">
            <img src={PepsaLogo} alt="Pepsa Logo" className="w-1/2 mx-auto md:mx-0 mb-2 sm:mb-4" />
            <p className="text-[#a50707] mb-2 sm:mb-6 font-bold text-lg sm:text-2xl">
              Everyday Needs Delivered to <br />your doorstep
            </p>
            <div className="flex gap-2 sm:gap-4 justify-center md:justify-start">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 sm:h-10" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={AppStore} alt="App Store" className="w-20 sm:w-32 cursor-pointer" />
              </a>
            </div>
          </div>
          {/* Right Circle Image */}
          <div className="w-full md:w-auto md:max-w-md flex justify-center flex-1">
            <div className="bg-[#a50707] rounded-full flex items-center justify-center w-28 h-28 sm:w-52 sm:h-52 md:w-64 md:h-64">
              <img
                src={MobileApp}
                alt="Pepsa app mockup"
                className="w-20 sm:w-36 md:w-52 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 pt-8 sm:pt-10">
          <img src={Partner1} alt="Partner GSE" className="h-10 sm:h-16 w-auto object-contain" />
          <img src={Partner2} alt="Partner I2M" className="h-10 sm:h-16 w-auto object-contain" />
          <img src={Partner3} alt="Partner RISA" className="h-10 sm:h-16 w-auto object-contain" />
          <img src={Partner4} alt="Partner UKAID" className="h-10 sm:h-16 w-auto object-contain" />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
