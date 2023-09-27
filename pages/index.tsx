import MainLayout from '@/components/layout/main';
import HeroSection from '@/components/sections/home/hero';
import ProjectsSection from '@/components/sections/home/projects';
import BackgroundVideo from '@/components/ui/backgroundVideo';
import { NextPageWithLayout } from './page';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />

      <section className="hidden relative bg-black h-[85vh]">
        <BackgroundVideo />

        <div className="absolute inset-0 z-50 container mx-auto flex flex-col lg:flex-row lg:items-stretch py-20 md:py-0 px-4">
          <div className="flex items-center min-h-[55vh] w-full md:w-[45%] ">
            <div className="md:pl-14 md:pr-10 pl-5 pr-5">
              <p className="text-sky-200 text-xl md:text-3xl font-medium">
                Hello,
              </p>
              <h2 className="text-white text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-600">
                  I'm{' '}
                </span>
                Eric Ricky.
              </h2>
              <p className="md:max-w-md text-slate-100 pt-5">
                A product designer based in Nairobi Kenya A product designer
                based in Nairobi Kenya in Nairobi Kenya in Nairobi Kenya in
                Nairobi Kenya
              </p>

              <div className="mt-10 flex items-center space-x-4">
                {/* {socialLinks.map(({ id, icon, link }) => (
                <Link
                  key={id}
                  href={link}
                  className="w-8 h-8 rounded-full bg-white grid place-items-center text-center hover:bg-opacity-80 hover:scale-110 transition duration-300"
                >
                  {icon}
                </Link>
              ))} */}
              </div>
              <p className="text-zinc-100 hidden">
                We understand that the heart of every successful company lies in
                its people. That's why we're dedicated to simplifying your
                talent acquisition process and helping you discover the ideal
                candidates who align with your vision and goals.
              </p>

              <div className="mt-10 hidden items-center space-x-4">
                <button
                  // onClick={() => router.push('/clients')}
                  className={`py-2 px-5 rounded-md cursor-pointer bg-orange-500 text-white font-medium hover:bg-orange-500/80 transition`}
                >
                  Get Started
                </button>

                <span className="text-white">Or</span>

                <button
                  className={`py-2 px-5 rounded-md cursor-pointer bg-orange-500/30 text-white font-medium hover:bg-orange-500/50 transition`}
                >
                  For talent
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center">
            <div className="max-w-lg bg-black ml-auto p-10 border border-purple-500">
              <h2 className="text-blue-500 uppercase font-semibold mb-5">
                Discover
              </h2>

              <p className="text-xl font-medium text-white mb-4">
                Design your learning experience
              </p>
              <p className="text-zinc-100">
                We understand that the heart of every successful company lies in
                its people. That's why we're dedicated to simplifying your
                talent
              </p>

              <div className="my-8 font-medium text-white cursor-pointer underline underline-offset-4">
                Get in touch
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
