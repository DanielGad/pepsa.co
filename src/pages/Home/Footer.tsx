
import React from 'react';
import Subscribe from '../../assets/images/Button.png';
import Facebook from '../../assets/images/facebook.png';
import WhatsApp from '../../assets/images/whatsapp.png';
import Twitter from '../../assets/images/twitter.png';
import Linkedin from '../../assets/images/linkedin.png';
import Instagram from '../../assets/images/instagram.png';
import PepsaLogoWhite from '../../assets/images/pepsa_logo_white_img.png';
import AppStore from '../../assets/images/App_Store.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-8" role="contentinfo">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="text-sm">
            A people-centric technology company committed to developing innovative customs that make life and commerce engagement easier.
          </p>
          <img src={PepsaLogoWhite} alt="Pepsa white logo" className="w-1/2 max-w-[120px]" />
        </div>

        {/* Useful Links Section */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Career</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <div className="text-sm space-y-2">
            <p>Call Customer Care</p>
            <p className="font-medium select-all">+234 813 347 5224</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <form className="flex w-full" onSubmit={e => e.preventDefault()} role="search">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="bg-white placeholder-gray-400 text-black px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#a50707] text-sm w-full min-w-0"
              autoComplete="email"
              required
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-[#9D0208] rounded-r-md px-2 py-1 border border-l-0 border-[#9D0208] hover:bg-[#9D0208] transition cursor-pointer"
            >
              <img src={Subscribe} alt="Subscribe" className="h-9" />
            </button>
          </form>
          <div className='flex gap-4 mt-4'>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={AppStore} alt="App Store" className="h-10 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-20 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <span className="text-sm">© {new Date().getFullYear()} Pepsa.co</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://wa.me/2348133475224" target="_blank" aria-label="WhatsApp" className="hover:opacity-55 transition"><img src={WhatsApp} alt="WhatsApp" className="h-8" /></a>
          <a href="https://www.facebook.com/pepsa.co" target="_blank" aria-label="Facebook" className="hover:opacity-55 transition"><img src={Facebook} alt="Facebook" className="h-8" /></a>
          <a href="https://www.instagram.com/pepsa.co/" target="_blank" aria-label="Instagram" className="hover:opacity-55 transition"><img src={Instagram} alt="Instagram" className="h-8" /></a>
          <a href="https://x.com/pepsaCo_" target="_blank" aria-label="Twitter" className="hover:opacity-55 transition"><img src={Twitter} alt="Twitter" className="h-8" /></a>
          <a href="https://www.linkedin.com/company/pepsaco" target="_blank" aria-label="LinkedIn" className="hover:opacity-55 transition"><img src={Linkedin} alt="LinkedIn" className="h-8" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
