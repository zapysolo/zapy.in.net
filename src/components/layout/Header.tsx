'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_ITEMS, OWNER_HANDLE } from '@/constants';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-vs-bg border-b border-vs-border fixed w-full top-0 z-50">
      <div className="flex items-center justify-between h-[60px] px-4 max-w-7xl mx-auto">
        <a href="/" className="text-vs-accent text-lg sm:text-xl font-mono">
          {OWNER_HANDLE}
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-vs-text hover:text-vs-accent focus:outline-none focus:ring-2 focus:ring-vs-accent rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav aria-label="Main navigation" className="hidden md:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              (pathname === '/' && item.section === 'home') ||
              (pathname === '/projects' && item.section === 'projects');
            return (
              <a
                key={item.section}
                href={item.href}
                data-section={item.section}
                className={`nav-link px-6 py-4 border-b-2 transition-all duration-200 hover:text-vs-accent font-mono text-sm ${
                  active
                    ? 'text-vs-accent border-vs-accent'
                    : 'text-vs-text border-transparent hover:bg-vs-bg-hover'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`${menuOpen ? '' : 'hidden'} md:hidden bg-vs-bg border-b border-vs-border shadow-lg`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.section}
            href={item.href}
            data-section={item.section}
            onClick={() => setMenuOpen(false)}
            className="mobile-nav-link block px-6 py-4 hover:text-vs-accent hover:bg-vs-bg-hover transition-all duration-200 text-vs-text font-mono text-sm"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
