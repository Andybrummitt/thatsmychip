import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Hamburger from './Hamburger';

const MobileNavbar = () => {
  return (
    <nav className="flex p-4 justify-between items-center h-16 md:hidden text-white bg-gradient-to-r from-orange-600 to-red-600">
      <Hamburger />
      <span>That&#39;s My Chip</span>
      <ThemeToggle />
    </nav>
  );
};

export default MobileNavbar;
