import Image from 'next/image';
import Link from 'next/link';

export const projectsData = [
  {
    id: 1,
    title: 'Feexzy - Service Marketplace',
    desc: 'Connecting homeowners with technical service providers through Next.js, Tailwind CSS, and Firebase.',
    link: 'https://fexxzy-client-app.vercel.app/',
    imgUrl: '/images/plumbing.jpg',
  },
  {
    id: 2,
    title: 'Global Concrete - Online Presence',
    desc: 'Bringing online presence to a leading construction chemicals provider with a modern website.',
    link: 'https://www.gcc.co.ke/',
    imgUrl: '/images/gcc.jpg',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row md:space-x-10 px-4 md:px-0">
        <div className="relative w-full md:w-[40%] h-96 md:h-auto bg-blue-950 mb-20 md:mb-0 group">
          <Image
            src="/images/shoppy1.jpg"
            fill
            alt="."
            className="group-hover:grayscale"
          />

          <div className="absolute inset-0 z-50 bg-black/40 hover:bg-black/20 transition duration-300 cursor-pointer flex flex-col p-10">
            <div className="flex-1"></div>
            <div className="flex items-center">
              <h5 className="text-5xl font-bold text-white pr-2">Shoppy</h5>
              <span className="flex-1 h-1 bg-slate-100 mt-4"></span>
              <Link
                href={'https://shoppy-woocommerce.vercel.app/'}
                target="_blank"
                className="p-2 border-4 border-slate-100 mt-4 font-medium text-slate-200 hover:underline transition"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 md:p-10 md:pb-2">
          <p className="text-sky-500 uppercase md:text-lg mb-4">Projects</p>

          <h2 className="text-2xl md:text-4xl font-medium text-white">
            A glimpse into my recent projects.
            {/* A glimpse into what I've
          been working on lately. */}
          </h2>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-10 md:space-y-0 mt-10 md:mt-20">
            {projectsData.map(({ id, title, desc, link, imgUrl }) => (
              <div
                key={id}
                className="flex-1 border border-purple-500 flex flex-col"
              >
                <div className="relative w-full h-56 bg-slate-900/70">
                  <Image src={imgUrl} fill alt="." className="object-cover" />
                </div>
                <div className="p-5 flex flex-col space-y-4">
                  <h5 className="text-white font-medium text-3xl">{title}</h5>

                  <p className="text-white">{desc}</p>

                  <Link
                    href={link}
                    target="_blank"
                    className="w-fit underline font-medium text-white hover:text-white/80 transition"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-end">
            <Link
              href={'/projects'}
              className="py-2 px-4 border-2 border-slate-100 mt-4 font-medium text-slate-200 hover:bg-slate-100 hover:text-slate-900 transition"
            >
              Explore more projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
