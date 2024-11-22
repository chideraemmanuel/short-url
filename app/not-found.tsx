import Logo from '@/components/logo';
import ThemeSwitcher from '@/components/theme-switcher';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const NotFoundPage: FC<Props> = () => {
  return (
    <>
      <div className="relative container md:pt-6 flex items-center justify-center min-h-screen">
        <div className="container absolute top-0 left-0 w-full flex justify-between items-center md:h-20 h-16">
          <Logo />

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 text-center py-20">
          <h1 className="text-3xl md:text-4xl md:w-[80%]">Page Not Found</h1>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg md:w-[80%]">
            Oops! The page you’re looking for can’t be found. It may have been
            moved, deleted, or never existed in the first place. Please
            double-check the URL or head back to the homepage.
          </p>

          <Link href={'/'} className={buttonVariants()}>
            Go to homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
