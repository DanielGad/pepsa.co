import WhatsApp from '../../assets/images/whatsapp-red.png';
import Twitter from '../../assets/images/twitter-red.png';
import Linkedin from '../../assets/images/linkedin-red.png';
import Instagram from '../../assets/images/instagram-red.png';
import Facebook from '../../assets/images/facebook-red.png';
import CareerImage from '../../assets/images/career.png';
import ApplicationForm from '../../components/ApplicationForm';
import Footer from '../Home/Footer';
import { useEffect } from 'react';
import { revealOnScroll } from '../../lib/ScrollAnimation';

const Career = () => {
      useEffect(() => {
        revealOnScroll();
      }, []);

  return (
    <div className="mt-5 overflow-x-hidden">
      <div className="header-container text-center text-white pb-10 h-150 blur-in">
        <p className='text-sm '>PEPSA SOLUTIONS LTD</p>
        <h2 className='text-4xl font-bold mt-5 fade-in-left'>Join Our Team in Building Commerce Ecosystem</h2>
        <p className='text-[16px] mt-5 mb-5 w-[80%] mx-auto fade-in-right'>As we build ecosystem for businesses, Join in shaping the future of commerce, one innovation at a time</p>
        <div className='flex justify-center items-center gap-4 rotate-in'>
          <a href="https://wa.me/2348133475224" target="_blank" aria-label="WhatsApp" className="hover:opacity-55 transition">
            <img src={WhatsApp} alt="Social Media" className='w-10 h-10 cursor-pointer'/>
          </a>
          <a href="https://www.facebook.com/pepsa.co" target="_blank" aria-label="Facebook" className="hover:opacity-55 transition">
            <img src={Facebook} alt="Social Media" className='w-10 h-10 cursor-pointer'/>
          </a>
          <a href="https://www.instagram.com/pepsa.co/" target="_blank" aria-label="Instagram" className="hover:opacity-55 transition">
            <img src={Instagram} alt="Social Media" className='w-10 h-10 cursor-pointer'/>
          </a>
          <a href="https://x.com/pepsaCo_" target="_blank" aria-label="Twitter" className="hover:opacity-55 transition">
            <img src={Twitter} alt="Social Media" className='w-10 h-10 cursor-pointer'/>
          </a>
          <a href="https://www.linkedin.com/company/pepsaco" target="_blank" aria-label="LinkedIn" className="hover:opacity-55 transition">
            <img src={Linkedin} alt="Social Media" className='w-10 h-10 cursor-pointer'/>
          </a>
        </div>
      </div>

      {/* Application Form */}
      <div className='mx-auto flex relative justify-center items-center mb-50 lg:mb-100'>
        <img src={CareerImage} alt="Career Image" className='w-100 absolute top-[-130px] lg:top-[-230px] lg:w-200 drop-in'/>
      </div>
      <div className='scale-up'>
      <ApplicationForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Career