import { socialLinks } from '@/components/sections/home/hero';
import Logo from '@/components/ui/logo';
import Link from 'next/link';
import { menuItems } from '../header';

const Footer = () => {
  return (
    <footer className="py-14">
      <div className="container mx-auto px-4">
        <Logo />

        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between space-y-10 md:space-y-0 mt-5">
          <div>
            <div className="flex items-center space-x-4">
              {menuItems.map(({ label, link }) => (
                <Link
                  key={label}
                  href={link}
                  className="inline-flex items-center leading-6 text-sm font-medium transition ease-in-out duration-75 cursor-pointer rounded-md text-zinc-500"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center space-x-4">
              {socialLinks.map(({ id, icon, link }) => (
                <Link
                  key={id}
                  href={link}
                  className="w-8 h-8 rounded-full bg-white grid place-items-center text-center hover:bg-opacity-80 hover:scale-110 transition duration-300"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          <p className="border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 text-slate-100">
            Made with ❤ by <strong> Eric Ricky </strong> &copy; 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
