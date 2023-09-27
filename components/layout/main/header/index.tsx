import Logo from '@/components/ui/logo';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import MobileMenu from './mobile-menu';

export const menuItems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Projects',
    link: '/projects',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="fixed w-full z-[99]">
      {/* =============  Main Header  ============== */}
      <header className="py-4 md:py-8 px-4 md:px-12 flex space-x-20 items-center justify-between">
        <Logo />

        <div
          className="cursor-pointer text-white"
          onClick={() => setMenuIsOpen((prev) => !prev)}
        >
          {menuIsOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenuAlt3 className="text-3xl" />
          )}
        </div>
      </header>

      {menuIsOpen && <MobileMenu setMenuIsOpen={setMenuIsOpen} />}
    </div>
  );
};

export default Header;
