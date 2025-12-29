'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link href="/" className="logo" onClick={closeMenu}>
          David Bello
        </Link>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/experience" onClick={closeMenu}>Experience</Link>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
}
