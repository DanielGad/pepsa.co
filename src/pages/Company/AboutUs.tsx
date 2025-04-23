import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import AboutImage1 from '../../assets/images/about-frame-1.png';
import AboutImage2 from '../../assets/images/about-frame-2.png';
import AboutImage3 from '../../assets/images/about-frame-3.png';
import AboutImage4 from '../../assets/images/about-frame-4.png';
import Vision from '../../assets/images/vision.png';
import Mission from '../../assets/images/mission.png';
import Brand from '../../assets/images/brand.png';
import Target from '../../assets/images/mdi_target.png';
import Innovation from '../../assets/images/hugeicons_ai-innovation-01.png';
import Empowerment from '../../assets/images/game-icons_stump-regrowth.png';
import Collaboration from '../../assets/images/openmoji_collaboration.png';
import Inclusitivity from '../../assets/images/fluent-mdl2_teamwork.png';
import Integrity from '../../assets/images/arcticons_play-integrity-api-checker.png';
import Footer from '../Home/Footer';
import { useEffect } from 'react';
import { revealOnScroll } from '../../lib/ScrollAnimation';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    revealOnScroll();
  }, []);

  const carouselImages = [AboutImage1, AboutImage2, AboutImage3, AboutImage4];

  const carouselItems = [
    {
      title: 'Vision',
      subtitle: 'Visionary Path',
      description:
        'To become a ubiquitous, people-centric solutions company, fostering great experiences and empowering businesses.',
      image: Vision,
    },
    {
      title: 'Mission',
      subtitle: 'Driving Purpose',
      description:
        'We champion an innovative ecosystem that simplifies the way people buy, manage businesses, deliver goods, and make payments.',
      image: Mission,
    },
    {
      title: 'Brand Ethos',
      subtitle: 'Our Tagline',
      description: 'Commerce solutions, built with you in mind',
      image: Brand,
    },
  ];

  const values = [
    {
      title: 'People focus',
      icon: Target,
      text: 'We put our customers, partners, and team, aiming to exceed expectations and deliver outstanding experiences.',
    },
    {
      title: 'Innovation',
      icon: Innovation,
      text: 'We embrace innovation to solve problems, improve our offerings, and drive positive change.',
    },
    {
      title: 'Empowerment',
      icon: Empowerment,
      text: 'We empower success in the digital economy through tools and opportunities.',
    },
    {
      title: 'Collaboration',
      icon: Collaboration,
      text: 'We value collaboration and teamwork, uniting diverse strengths to achieve shared success.',
    },
    {
      title: 'Inclusivity',
      icon: Inclusitivity,
      text: 'We promote inclusivity through scalable, user-friendly commerce tech with secure in-platform banking for all.',
    },
    {
      title: 'Integrity',
      icon: Integrity,
      text: 'We uphold integrity, honesty, and transparency to earn lasting trust and respect.',
    },
  ];

  return (
    <>
      <section className="mt-5 overflow-x-hidden">
        {/* Header */}
        <div className="header-container flex flex-col md:flex-row items-center justify-between bg-[#a50707] text-white py-20 px-6 md:px-30 gap-10 blur-in ">
          <div className="max-w-2xl text-left fade-in-up">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-8 font-light max-w-md">
              We are a people-centric technology company, committed to developing innovative solutions that make life and commerce engagement easier, with customers’ preferences in mind.
            </p>
          </div>

          <div className="w-full max-w-[400px] mt-10 zoom-in">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              loop
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className="rounded-2xl"
            >
              {carouselImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`About slide ${i + 1}`}
                    className="w-full h-auto rounded-2xl object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Strategic Framework Section */}
        <div className="flex flex-col lg:flex-row justify-between p-6 md:px-30 gap-10">
          <div className="lg:w-1/2 slide-in-bottom text-center lg:text-left">
            <h2 className="text-4xl font-semibold mb-4 mt-10 lg:mt-30">
              Our Strategic <br /> Framework
            </h2>
          </div>

          <div className="lg:w-1/2 space-y-4 overflow-y-auto max-h-[400px] pr-2 fade-in-left">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="relative h-80 w-full rounded-md overflow-hidden shadow-md flex items-end p-4 text-white zoom-in"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay',
                  backgroundColor: '#18212d',
                }}
              >
                <div className="z-10 w-full">
                  <h3 className="text-sm uppercase text-white absolute top-5">{item.title}</h3>
                  <div className="bg-[#151616a8] rounded-md p-2 w-full">
                    <p className="text-lg font-semibold">{item.subtitle}</p>
                    <p className="text-sm text-white mt-3">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-red-800 text-white py-16 px-10 fade-in-right">
          <h3 className="text-4xl font-bold text-center mb-10">The Values that Define Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-start space-y-3 px-4">
                <img src={value.icon} alt={value.title} className="w-14 h-14 object-contain mb-1" />
                <h4 className="font-bold text-xl">{value.title}</h4>
                <p className="text-sm">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Partner */}
        <div className="bg-[#f5f5f5] py-16 px-6 text-center">
          <div className="bg-[#fef7f8] rounded-md py-12 shadow-md w-full max-w-3xl mx-auto drop-in scale-up">
            <h3 className="text-2xl font-bold mb-4">Ready to partner with us at Pepsa?</h3>
            <p className="text-lg mb-6 w-full md:w-2/3 mx-auto">
              Together, we can build a future where commerce is simpler, more accessible, and truly empowering for everyone.
            </p>
            <Link to="/contact" rel="noopener noreferrer">
            <button className="bg-[#a50707] text-white py-2 px-6 rounded-md cursor-pointer">
              Get In-Touch
            </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
