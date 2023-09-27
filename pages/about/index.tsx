import MainLayout from '@/components/layout/main';
import Image from 'next/image';
import Link from 'next/link';
import { NextPageWithLayout } from '../page';

const myAproach = [
  {
    id: 1,
    title: 'User-Centric Design',
    desc: 'My UI/UX design sensibilities are driven by the goal of providing users with intuitive and visually appealing experiences.',
  },
  {
    id: 2,
    title: 'Clean Code',
    desc: 'I believe in code that is not only functional but also maintainable. Clean, well-documented code that ensures longevity and extensibility.',
  },
];

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <section className="py-28 bg-slate-900">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:space-x-28 px-5 md:px-28">
          <div>
            <p className="text-sky-500 uppercase md:text-lg mb-4">About</p>

            <h2 className="max-w-md text-2xl md:text-4xl font-medium text-white">
              Discover the mind behind the code
            </h2>
          </div>

          <div className="flex-1">
            <div className=" mt-10 md:mt-20">
              <p className="md:text-lg text-zinc-200">
                Hi, I'm <strong>Eric Ricky </strong>, a versatile software
                developer with a passion for building exceptional full-stack
                applications. With a strong foundation in React, Next.js, React
                Native, and Node.js, I'm equipped to bring your digital visions
                to life.
              </p>
            </div>

            <div className="mt-10 flex items-center">
              <Link
                href={'/contact'}
                className="py-2 px-4 border-2 border-slate-100 mt-4 font-medium text-slate-200 hover:bg-slate-100 hover:text-slate-900 transition"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-10 px-4 md:px-0">
          <div className="relative w-full md:w-[40%] h-96 md:h-auto bg-blue-950 mb-20 md:mb-0 group">
            <Image
              src="/images/shoppy1.jpg"
              fill
              alt="."
              className="grayscale group-hover:grayscale-0"
            />

            <div className="absolute inset-0 z-50 bg-black/40 hover:bg-black/20 transition duration-300 cursor-pointer flex flex-col p-10">
              <div className="flex-1"></div>
              <div className="flex items-center">
                <h5 className="text-5xl font-bold text-white pr-2">Shoppy</h5>
                <span className="flex-1 h-1 bg-slate-100 mt-4"></span>
                <Link
                  href={'/projects/1'}
                  className="p-2 border-4 border-slate-100 mt-4 font-medium text-slate-200 hover:underline transition"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1 md:p-10 md:pb-2">
            <p className="text-sky-500 uppercase md:text-lg mb-4">
              My Approach
            </p>

            <h2 className="text-2xl md:text-4xl font-medium text-white">
              I approach each project with a commitment to excellence:
            </h2>

            <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-10 md:space-y-0 mt-10 md:mt-20">
              {myAproach.map(({ id, title, desc }) => (
                <div
                  key={id}
                  className="flex-1 border border-purple-500 flex flex-col"
                >
                  <div className="p-5 flex flex-col space-y-4">
                    <h5 className="text-white font-medium text-2xl">{title}</h5>

                    <p className="text-white">{desc}</p>

                    <p className="w-fit underline font-medium text-white hover:text-white/80 transition">
                      Learn more
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-end">
              <Link
                href={'/projects'}
                className="py-2 px-4 border-2 border-slate-100 mt-4 font-medium text-slate-200 hover:bg-slate-100 hover:text-slate-900 transition"
              >
                Explore projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
