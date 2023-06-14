import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="py-4 px-12 justify-between items-center h-20 hidden md:flex text-white bg-gradient-to-r from-orange-600 to-red-600">
      <span>That&#39;s My Chip</span>
      <div className="flex justify-between items-center w-1/2">
        <ul className="flex justify-around w-full">
          <li>
            <Link href="/play">Play now</Link>
          </li>
          <li>
            <Link href="/how-to-play">How to play</Link>
          </li>
          <li>
            <Link
              href="/sign-in"
              className="rounded-full bg-white text-red-500 font-bold px-4 py-1"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/create-account">Sign up</Link>
          </li>
        </ul>
        <div className="ml-24 flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
