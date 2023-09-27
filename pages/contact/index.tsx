import MainLayout from '@/components/layout/main';
import Link from 'next/link';
import { HiMail } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi2';
import { NextPageWithLayout } from '../page';

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <section className="py-40">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:space-x-28 px-5 md:px-24">
          <div>
            <p className="text-sky-500 uppercase md:text-lg mb-4">
              Let's Connect
            </p>
            <p className="max-w-md text-2xl font-medium text-white">
              I'm open to exciting opportunities and collaborations. Feel free
              to reach out!
            </p>

            <div className="mt-5 flex flex-col space-y-2">
              <div className="flex items-center space-x-4">
                <HiMail className="text-xl text-white" />
                <Link
                  href={'mailto:ericricky200@gmail.com'}
                  className="text-slate-300"
                >
                  ericricky200@gmail.com
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <HiPhone className="text-xl text-white" />

                <Link href={'tel:0710752939'} className="text-slate-300">
                  +254 710 752939
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mt-12 md:mt-10">
              <div className="grid grid-cols-12 gap-5 p-5 md:p-8 rounded-lg text-white bg-slate-900 md:bg-transparent">
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-md py-2.5 px-4 border border-purple-900/90 outline-none bg-slate-900 text-sm placeholder:text-sm placeholder:text-white/75"
                  />
                </div>

                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-md py-2.5 px-4 border border-purple-500/50 outline-none bg-slate-900 text-sm placeholder:text-sm placeholder:text-white/75"
                  />
                </div>

                <div className="col-span-12">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-md py-2.5 px-4 border border-purple-500/50 outline-none bg-slate-900 text-sm placeholder:text-sm placeholder:text-white/75"
                  />
                </div>

                <div className="col-span-12">
                  <textarea
                    cols={30}
                    rows={10}
                    placeholder="Enter Message"
                    className="w-full rounded-md py-2.5 px-4 border border-purple-500/50 outline-none bg-slate-900 text-sm placeholder:text-sm placeholder:text-white/75"
                  />
                </div>

                <div className="col-span-12 flex items-center justify-end">
                  <button className="py-2 px-4 bg-purple-500 rounded-lg font-medium text-sm hover:bg-opacity-80 transition">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

ContactPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
