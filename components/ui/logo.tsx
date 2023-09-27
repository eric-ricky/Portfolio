import Link from 'next/link';
import { HiOutlineCodeBracket } from 'react-icons/hi2';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-xl md:text-2xl leading-6 font-bold outline-none active:outline-none relative md:w-44 md:h-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-teal-100"
      aria-label="Logo"
    >
      {/* <div className="p-1.5 bg-gradient-to-r from-orange-200 via-red-500 to-yellow-500 rounded-full rounded-tl-none mr-1">
        <FaPeopleRoof className="text-sm text-white" />
      </div> */}
      <HiOutlineCodeBracket className="text-3xl text-white mr-2 pt-0.5" />
      <span> Eric Ricky</span>
    </Link>
  );
};

export default Logo;
