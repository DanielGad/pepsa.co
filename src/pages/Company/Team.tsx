import TeamCard from '../../components/TeamCard';
import CEO from "../../assets/images/Adekunle_Oloyede.png";
import CTO from "../../assets/images/Daniel_Orire.png";
import Senior from "../../assets/images/Adebayo_Oloyede.png";
import Manager from "../../assets/images/Agbonde_Akintunde.png";
import Ops from "../../assets/images/Opeyemi_Ogunseye.png";
import Data from "../../assets/images/Uchenna_Emmanuel.png";
import Member1 from "../../assets/images/Olagoke_Olorunosebi.png";
import Member2 from "../../assets/images/Blessing_Oyeleke.png";
import Member3 from "../../assets/images/Mobolaji_Akinola.png";
import TeamLogo from "../../assets/images/Team.png";
import JoinUs from "../../assets/images/Join_us.png";
import Footer from '../Home/Footer';
import { useEffect } from 'react';
import { revealOnScroll } from '../../lib/ScrollAnimation';


const teamMembers = [
  {
    name: 'Adekunde OLOYEDE',
    role: 'Founder/CEO',
    image: CEO
  },
  {
    name: 'Daniel ORIRE',
    role: 'CTO',
    image: CTO,
    highlight: true,
  },
  {
    name: 'Adebayo OLOYEDE',
    role: 'Senior Engineer',
    image: Senior,
  },
  {
    name: 'Opeyemi OGUNESEYE',
    role: 'Operations',
    image: Ops,
  },
  {
    name: 'Uchenna EMMANUEL',
    role: 'Data Team Lead & Engineer',
    image: Data,
  },
  {
    name: 'Agbodone AKINTUNDE',
    role: 'Project IT Manager',
    image: Manager,
  },
  {
    name: 'Olagoke OLORUNOSEBI',
    role: 'Team Member',
    image: Member1,
  },
  {
    name: 'Blessing OYELEKE',
    role: 'Team Member',
    image: Member2,
  },
  {
    name: 'Mobalaji AKINOLA',
    role: 'Team Member',
    image: Member3,
  },
];

const Team = () => {
    useEffect(() => {
      revealOnScroll();
    }, []);
    
  return (
    <div>
  {/* Hero Section */}
  <div className="header-container bg-[#a00000] text-white py-10 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-10 blur-in overflow-x-hidden">
    <div className="fade-in-left w-full md:w-1/2">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-6">Let’s Build the Future Together</h1>
      <p className="mt-2 text-sm md:text-md max-w-md text-left">
        As we build ecosystems for businesses, join in shaping the future of commerce, one innovation at a time.
      </p>
    </div>
    <img
      src={TeamLogo}
      alt="Team Logo"
      className="w-full md:w-[300px] fade-in-right"
    />
  </div>

  {/* Team Section */}
  <div className="py-16 px-6 sm:px-10 w-[80%] mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Meet The Team</h2>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto fade-in-up">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>
  </div>

  {/* Join Us */}
  <div className="bg-[#a00000] rounded-xl flex flex-col lg:flex-row p-6 lg:p-10 text-center justify-center items-center mx-4 md:mx-20 lg:mx-40 mb-20 gap-6">
    <div className="text-left fade-in-left">
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4">Ready to Join Us?</h3>
      <p className="mb-6 text-white max-w-sm">
        Discover how you can make an impact and build a meaningful career with us.
      </p>
      <button className="bg-white text-[#a00000] font-semibold px-6 py-2 rounded-md border hover:bg-[#a00000] hover:text-white transition duration-300">
        Contact Now
      </button>
    </div>
    <img
      src={JoinUs}
      alt="Join us"
      className="w-full max-w-xs fade-in-right"
    />
  </div>

  <Footer />
</div>

  );
};

export default Team;
