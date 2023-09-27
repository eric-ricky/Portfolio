import MainLayout from '@/components/layout/main';
import Image from 'next/image';
import Link from 'next/link';
import { NextPageWithLayout } from '../page';

const projectsData = [
  {
    id: 1,
    title: 'Shoppy - E-commerce Platform',
    desc: 'A full-stack e-commerce platform with a modern design focusing on efficient fetching, caching, and updating of data.',
    link: 'https://shoppy-woocommerce.vercel.app/',
    imgUrl: '/images/shoppy1.jpg',
  },
  {
    id: 2,
    title: 'Global Concrete - Online Presence',
    desc: 'Bringing online presence to a leading construction chemicals provider with a modern website.',
    link: 'https://www.gcc.co.ke/',
    imgUrl: '/images/gcc.jpg',
  },
  {
    id: 3,
    title: 'Feexzy - Service Marketplace',
    desc: 'Connecting homeowners with technical service providers through Next.js, Tailwind CSS, and Firebase.',
    link: 'https://fexxzy-client-app.vercel.app/',
    imgUrl: '/images/plumbing.jpg',
  },
];

const ProjectsPage: NextPageWithLayout = () => {
  return (
    <section className="py-40">
      <div className="container mx-auto flex flex-col">
        <div>
          <p className="text-sky-500 uppercase md:text-lg mb-4">Projects</p>

          <h2 className="text-2xl md:text-4xl font-medium text-white">
            A glimpse into my recent projects.
            {/* A glimpse into what I've
          been working on lately. */}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-10 md:space-y-0 mt-10 md:mt-20">
          {projectsData.map(({ id, title, desc, link, imgUrl }) => (
            <div
              key={id}
              className="h-96 border border-purple-500 flex flex-col group cursor-pointer transition duration-300"
            >
              <div className="relative w-full h-56 bg-slate-900/70 overflow-hidden">
                <Image
                  src={imgUrl}
                  fill
                  alt="."
                  className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                />
              </div>

              <div className="p-5 flex flex-col space-y-4">
                <h5 className="text-white font-medium text-3xl">{title}</h5>

                <p className="text-white max-w-md">{desc}</p>

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

        <div className="hidden items-center justify-end">
          <Link
            href={'/projects/1'}
            className="py-2 px-4 border-2 border-slate-100 mt-4 font-medium text-slate-200 hover:bg-slate-100 hover:text-slate-900 transition"
          >
            Explore more projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

ProjectsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
