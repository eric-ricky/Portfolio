import MainLayout from '@/components/layout/main';
import { NextPageWithLayout } from './page';

const NotFoundPage: NextPageWithLayout = () => {
  return (
    <section className="py-44">
      <div className="container mx-auto flex flex-col items-center">
        <div className="max-w-md mx-auto text-center px-4 md:px-0">
          <h2 className="text-xl md:text-4xl font-bold pb-5 text-white">
            Page Not Found
          </h2>
          <p className="text-zinc-500">
            The page you are looking was moved, removed, renamed, or might never
            exist!
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

NotFoundPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
