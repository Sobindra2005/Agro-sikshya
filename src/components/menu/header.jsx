import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { FaUserAlt } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for the hamburger menu
import Search from '../search';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='fixed bg-purewhite z-50 flex justify-between items-center p-4 pt-5 space-x-10 w-full'>
        <div>
          <Link to='/' className='flex items-center text-xl'>
            <img src={Logo} alt="Logo" className='w-6 sm:w-12' />
            <h3 className=' ml-2'>Agro-Sikshya</h3>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className='hidden md:flex flex-row space-x-10 items-center'>
          <li><Link to='/' className='hover:text-accent'>Home</Link></li>
          <li><Link to='/courses' className='hover:text-accent'>Course</Link></li>
          <li><Link to='/login' className='flex items-center hover:text-accent'><FaUserAlt className='mr-2' />Login</Link></li>
          <li><Link to='/signup' className='border p-2 rounded-md hover:bg-accent hover:text-purewhite'>Register</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='relative'>

        <div className='md:hidden'>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Dropdown Style) */}
      <div className={`absolute top-0 right-10  bg-white shadow-md transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <ul className='flex flex-col items-center p-4 space-y-4'>
          <li><Link to='/' onClick={toggleMobileMenu} className='hover:text-accent'>Home</Link></li>
          <li><Link to='/courses' onClick={toggleMobileMenu} className='hover:text-accent'>Course</Link></li>
          <li><Link to='/login' onClick={toggleMobileMenu} className='flex items-center hover:text-accent'><FaUserAlt className='mr-2' />Login</Link></li>
          <li><Link to='/signup' onClick={toggleMobileMenu} className='border p-2 rounded-md hover:bg-accent hover:text-purewhite'>Register</Link></li>
        </ul>
        </div>
      </div>

      {/* Search Bar */}
      <Search className='relative md:fixed' />

      {/* Language Switcher */}
      <div className='flex justify-end m-2 p-2'>
        <p className='hidden border sm:flex items-center justify-center space-x-2 p-2 rounded-md bg-accent hover:bg-fourth text-white'>
          <MdTranslate /> <span>En/Np</span>
        </p>
      </div>
    </>
  );
}
