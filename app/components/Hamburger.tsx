'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <div onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? <Menu size={32} /> : <X size={32} />}
      </div>

      {menuOpen ? (
        <ul className="fixed top-[4.5rem] animate-slide-in left-2 w-1/2 p-4 [&>*]:py-4 rounded-lg text-white text-l bg-gradient-to-b from-orange-600 to-red-600">
          <li onClick={closeMenu}>
            <Link className="inline-block py-2 min-w-full" href="/">
              Home
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link className="inline-block py-2 min-w-full" href="/play">
              Play now
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link className="inline-block py-2 min-w-full" href="/how-to-play">
              How to play
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link className="inline-block py-2 min-w-full" href="/sign-in">
              Sign In
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              className="inline-block py-2 min-w-full"
              href="/create-account"
            >
              Sign up
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Hamburger;
