import BackgroundVideo from '@/components/ui/backgroundVideo';
import { useUIContext } from '@/lib/context/ui';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';

export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedinIn className="text-lg" />,
    link: 'https://linkedin.com',
  },
  {
    id: 2,
    icon: <FaTwitter className="text-lg" />,
    link: 'https://twitter.com',
  },
  {
    id: 3,
    icon: <FaWhatsapp className="text-lg" />,
    link: 'https://twitter.com',
  },
];

const HeroSection = () => {
  const UICtx = useUIContext();
  const { ref, inView } = useInView({
    initialInView: true,
    threshold: 0.2,
  });

  useEffect(() => {
    UICtx?.setState((prev) => ({ ...prev, showHeader: inView }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section ref={ref} className="relative h-[75vh] md:h-[85vh]">
      <BackgroundVideo />
      <div className="absolute inset-0 z-50 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      <div className="absolute inset-0 z-50 container mx-auto flex flex-col lg:flex-row lg:items-stretch py-28 md:py-0 px-4">
        <div className="flex items-center min-h-[55vh] w-full md:w-[45%] ">
          <div className="md:pl-14 md:pr-10 pl-5 pr-5">
            <p className="text-sky-200 text-xl md:text-3xl font-medium">
              Hello!
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-600">
                I'm{' '}
              </span>
              Eric Ricky.
            </h2>
            <p className="md:max-w-md text-slate-100 pt-5">
              A passionate software developer with a knack for turning complex
              ideas into elegant solutions.
            </p>

            <div className="mt-10 flex items-center space-x-4">
              <Link
                href={'/about'}
                className="py-2 px-4 border border-spacing-4 border-purple-200 bg-purpl-200 text-purple-200 font-medium text-sm hover:bg-purple-200 hover:text-purple-800 active:scale-90 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 hidden md:flex items-center">
          <div className="max-w-lg bg-black ml-auto p-10 border border-purple-500">
            <h2 className="text-blue-500 uppercase font-semibold mb-5">
              Let's Connect
            </h2>
            <p className="text-zinc-100">
              If you're seeking a software developer who can turn your ideas
              into a reality, from concept to deployment, I'd love to chat.
            </p>

            <div className="mt-10 flex items-center justify-between space-x-4">
              <Link
                href={'/contact'}
                className=" font-medium text-white cursor-pointer underline underline-offset-4"
              >
                Get in touch
              </Link>
              <div className="flex items-center space-x-4">
                {socialLinks.map(({ id, icon, link }) => (
                  <Link
                    key={id}
                    href={link}
                    className="w-6 h-6 rounded-full bg-white grid place-items-center text-center hover:bg-opacity-80 hover:scale-110 transition duration-300"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
