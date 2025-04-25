import TeamLogo from "../assets/images/shout-out.png";
import WhatsApp from '../assets/images/whatsapp-red.png';
import Twitter from '../assets/images/twitter-red.png';
import Linkedin from '../assets/images/linkedin-red.png';
import Instagram from '../assets/images/instagram-red.png';
import Facebook from '../assets/images/facebook-red.png';
import { useEffect, useState } from "react";
import { revealOnScroll } from "../lib/ScrollAnimation";
import Footer from "./Home/Footer";

type ContactFormData = {
  purpose: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  mobileNumber: string;
  email: string;
  message: string;
};

const Contact = () => {
  useEffect(() => {
    revealOnScroll();
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    purpose: '',
    firstName: '',
    lastName: '',
    countryCode: '+234',
    mobileNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="header-container bg-[#a00000] text-white py-10 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-10 blur-in overflow-x-hidden">
        <div className="fade-in-left w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">Get In Touch With Us</h1>
          <p className="mt-2 text-md md:text-md text-center">
            Your experience is our priority, and we are here to assist you promptly and thoroughly.
          </p>
          <div className='flex justify-center items-center  gap-4 rotate-in mt-10'>
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
        <img
          src={TeamLogo}
          alt="Team Logo"
          className="w-full md:w-[300px] fade-in-right"
        />
      </div>

      {/* Contact Form */}
      <div className="scale-up max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md w-[80%] my-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xl font-medium text-gray-700 mb-1">Purpose of Contact</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
              required
            >
              <option value="">Select</option>
              <option value="inquiry">General Inquiry</option>
              <option value="appointment">Products</option>
              <option value="appointment">Resources</option>
              <option value="appointment">Company</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <div className="flex">
              <input
                type="text"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-1/4 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
                required
              />
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="89501234"
                className="w-3/4 px-3 py-2 border-t border-b border-r border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
              rows={5}
              required
            />
          </div>

          <div className="mb-6 text-sm text-gray-600 w-[80%] mx-auto text-center">
            <p>By sending, you consent to the collection and secure storage of your data for this application, in line with our privacy policy.</p>
          </div>

          <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#a00000] text-white py-2 px-10 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#a00000] focus:ring-offset-2 cursor-pointer transition duration-300"
          >
            Send Message
          </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;