'use client';

import { useEffect, useState } from 'react';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';

type SectionName = 'home' | 'about' | 'contact';
const sectionNames: SectionName[] = ['home', 'about', 'contact'];

export default function HomeSections() {
  const [activeSection, setActiveSection] = useState<SectionName>('home');

  useEffect(() => {
    const stored = window.localStorage.getItem('activeSection');
    if (stored && sectionNames.includes(stored as SectionName)) {
      setActiveSection(stored as SectionName);
    }

    const handleNavigation = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('[data-section]');
      const section = link?.dataset.section;
      if (!link || !sectionNames.includes(section as SectionName)) return;

      event.preventDefault();
      const nextSection = section as SectionName;
      setActiveSection(nextSection);
      window.localStorage.setItem('activeSection', nextSection);
      window.history.replaceState(null, '', `/#${nextSection}`);
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  const sections = [
    { name: 'home', component: <Hero /> },
    { name: 'about', component: <About /> },
    { name: 'contact', component: <Contact /> },
  ] as const;

  return (
    <main className="flex-1 overflow-hidden relative" id="main-content">
      {sections.map(({ name, component }) => (
        <div
          key={name}
          id={`section-${name}`}
          className={`absolute inset-0 transition-opacity duration-300 overflow-y-auto ${
            activeSection === name ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={activeSection !== name}
        >
          {component}
        </div>
      ))}
    </main>
  );
}
