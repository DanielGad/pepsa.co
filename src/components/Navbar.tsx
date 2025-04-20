import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Pepsa_Logo from '../assets/images/pepsa_logo_red.png';
import '@fortawesome/fontawesome-free/css/all.css';
import { useState, useRef } from 'react';

const dropdownVariants = {
  hidden: { opacity: 0, y: 50, pointerEvents: 'none' as const },
  visible: { opacity: 1, y: 0, pointerEvents: 'auto' as const, transition: { duration: 0.30, ease: 'easeOut' } },
  exit: { opacity: 0, y: 20, pointerEvents: 'none' as const, transition: { duration: 0.30, ease: 'easeIn' } },
};

type DropdownItem = {
  label: string;
  items: { label: string; link: string }[];
};

const dropdownMenus: DropdownItem[] = [
  {
    label: 'Company',
    items: [
      { label: 'About Us', link: '/about-us' },
      { label: 'Team', link: '/team' },
      { label: 'Career', link: '/career' },
    ],
  },
  {
    label: 'Products',
    items: [
      { label: 'Pepsa Store', link: '/store' },
      { label: 'Pepsa Plog', link: '/plug' },
      { label: 'Pepsa Dispatch', link: '/dispatch' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'News/Blog', link: '/blogs' },
      { label: 'How it works', link: '/how-it-works' },
    ],
  },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState<number | null>(null);
  const closeDropdownTimer = useRef<NodeJS.Timeout | null>(null);

  const dropdownRefs = useRef<(HTMLLIElement | null)[]>([]);
  const location = useLocation();

  const activeDropdownIdx = dropdownMenus.findIndex(menu =>
    menu.items.some(item => item.link === location.pathname)
  );

  // ---- NEW: Delayed Dropdown Handlers ----
  const handleMouseEnterDropdown = (idx: number) => {
    if (closeDropdownTimer.current) {
      clearTimeout(closeDropdownTimer.current);
      closeDropdownTimer.current = null;
    }
    setOpenDropdown(idx);
  };

  const handleMouseLeaveDropdown = () => {
    if (closeDropdownTimer.current) clearTimeout(closeDropdownTimer.current);
    closeDropdownTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 160); // adjust as needed (120-200ms typical)
  };
  // ---- END NEW ----

  // Keyboard: handle open/close for dropdown trigger
  const handleDropdownKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    idx: number,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setOpenDropdown(openDropdown === idx ? null : idx);
      event.preventDefault();
    }
    if (event.key === 'ArrowDown') {
      setOpenDropdown(idx);
      event.preventDefault();
    }
    if (event.key === 'Escape') {
      setOpenDropdown(null);
    }
  };

  // Hamburger click handler
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
    setMobileMenuDropdown(null);
  };

  // Mobile dropdown toggle
  const handleMobileDropdown = (idx: number) => {
    setMobileMenuDropdown(mobileMenuDropdown === idx ? null : idx);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 md:p-0 lg:p-2 transition-all duration-200">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-[80px] py-2 md:py-4">
        {/* Logo */}
        <Link to="/" className="cursor-pointer flex items-center shrink-0" aria-label="Pepsa Home">
          <img src={Pepsa_Logo} alt="Pepsa Logo" className="w-[90px] md:w-[120px]" />
        </Link>
        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex items-center text-2xl px-2 text-[rgb(165,22,27)] focus:outline-none"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={toggleMobileMenu}
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-8 lg:space-x-10 items-center">
          <li className={`cursor-pointer text-[16px] transition-colors duration-150 text-[rgb(63,40,59)] ${
            location.pathname === '/' ? 'text-[rgb(165,22,27)]' : 'hover:text-[rgb(165,22,27)]'
          }`}>
            <Link to="/">Home</Link>
          </li>

          {/* Desktop Dropdowns */}
          {dropdownMenus.map((menu, idx) => {
            const isMenuActive = idx === activeDropdownIdx;
            return (
              <li
                key={menu.label}
                className="relative text-[16px]"
                ref={el => { dropdownRefs.current[idx] = el }}
                tabIndex={-1}
                onMouseEnter={() => handleMouseEnterDropdown(idx)}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <div
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  className={`relative cursor-pointer transition-colors duration-150 flex items-center
                    ${
                      openDropdown === idx || isMenuActive
                        ? 'text-[rgb(165,22,27)]'
                        : 'text-[rgb(63,40,59)] hover:text-[rgb(165,22,27)]'
                    }
                  `}
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === idx}
                  tabIndex={0}
                  onKeyDown={e => handleDropdownKeyDown(e, idx)}
                  role="button"
                >
                  <span>{menu.label}</span>
                  <i className="fas fa-chevron-down text-[16px] ml-1"></i>
                </div>

                <AnimatePresence>
                  {openDropdown === idx && (
                    <motion.ul
                      key={`${menu.label}-dropdown`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      className="absolute left-0 top-full z-20 w-[200px] space-y-4 text-[16px] bg-white p-5 pl-7 rounded-lg shadow-xl mt-4 pointer-events-auto"
                      role="menu"
                      onMouseEnter={() => handleMouseEnterDropdown(idx)}
                      onMouseLeave={handleMouseLeaveDropdown}
                    >
                      {menu.items.map(item => (
                        <li
                          key={item.label}
                          className={`hover:text-[rgb(165,22,27)] transition-colors duration-150 cursor-pointer ${
                            location.pathname === item.link ? 'text-[rgb(165,22,27)]' : ''
                          }`}
                          onClick={() => setOpenDropdown(null)}
                          tabIndex={-1}
                          role="menuitem"
                        >
                          <Link to={item.link} className="block w-full text-inherit">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            );
          })}

          <li className={`cursor-pointer text-[16px] transition-colors duration-150 text-[rgb(63,40,59)] ${
            location.pathname === '/contact' ? 'text-[rgb(165,22,27)]' : 'hover:text-[rgb(165,22,27)]'
          }`}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Desktop Get Started Button */}
        <div className="hidden lg:block">
          <Link to="/get-started">
            <button className="bg-[rgb(165,22,27)] text-white px-8 py-3 rounded-[25px] text-sm border border-transparent hover:bg-white hover:text-[rgb(63,40,59)] hover:border-[rgb(165,22,27)] transition-all duration-200 cursor-pointer shadow">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden w-full bg-white shadow-lg absolute top-full left-0 z-40 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-4 text-lg">
              <li className={`cursor-pointer py-2 text-[rgb(63,40,59)] ${
                location.pathname === '/' ? 'text-[rgb(165,22,27)]' : 'hover:text-[rgb(165,22,27)]'
              }`}>
                <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
              </li>
              {dropdownMenus.map((menu, idx) => (
                <li key={menu.label} className="relative">
                  <button
                    className={`flex items-center w-full justify-between py-2 text-[rgb(63,40,59)] hover:text-[rgb(165,22,27)] font-medium`}
                    onClick={() => handleMobileDropdown(idx)}
                    aria-haspopup="true"
                    aria-expanded={mobileMenuDropdown === idx}
                  >
                    <span>{menu.label}</span>
                    <i className={`fas fa-chevron-down ml-2 transition-transform duration-200 ${mobileMenuDropdown === idx ? 'rotate-180' : ''}`}></i>
                  </button>
                  <AnimatePresence>
                    {mobileMenuDropdown === idx && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 mt-1 pl-2 border-l-2 border-[rgb(165,22,27)] py-1"
                      >
                        {menu.items.map(item => (
                          <li
                            key={item.label}
                            className={`py-2 block hover:text-[rgb(165,22,27)] ${
                              location.pathname === item.link ? 'text-[rgb(165,22,27)]' : ''
                            }`}
                          >
                            <Link
                              to={item.link}
                              className="block"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileMenuDropdown(null);
                              }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
              <li className={`cursor-pointer py-2 text-[rgb(63,40,59)] ${
                location.pathname === '/contact' ? 'text-[rgb(165,22,27)]' : 'hover:text-[rgb(165,22,27)]'
              }`}>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
              </li>
              <li>
                <Link to="/get-started" onClick={() => setMobileOpen(false)}>
                  <button className="w-full text-center bg-[rgb(165,22,27)] text-white px-4 py-3 rounded-[25px] text-base border border-transparent hover:bg-white hover:text-[rgb(63,40,59)] hover:border-[rgb(165,22,27)] transition-all duration-200 cursor-pointer shadow">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;