import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { menuItems } from '..';

interface IMobileMenu {
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<IMobileMenu> = ({ setMenuIsOpen }) => {
  const router = useRouter();

  return (
    <nav
      className={`fixed top-0 left-0 z-[99] h-screen w-full bg-black/90 flex flex-col`}
    >
      <div className="flex justify-end p-4 border-b-slate-400/40 border-b">
        <div
          onClick={() => setMenuIsOpen(false)}
          className="w-fit p-2 rounded-full  cursor-pointer flex items-center font-medium"
        >
          <HiOutlineX className="text-xl md:text-4xl text-white cursor-pointer" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-10">
        {menuItems.map((item, index) => (
          <li
            onClick={() => setMenuIsOpen(false)}
            key={index}
            className="list-none py-2"
          >
            <Link
              href={item.link}
              className={`${
                router.asPath === item.link
                  ? 'text-slate-400 py-2 px-5 underline'
                  : 'text-slate-100'
              } leading-6 text-3xl font-medium transition ease-in-out duration-300 cursor-pointer hover:py-2 hover:px-5 underline-offset-8 hover:underline`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default MobileMenu;
