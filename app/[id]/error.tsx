'use client';

import Logo from '@/components/logo';
import ThemeSwitcher from '@/components/theme-switcher';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const LinkRedirectErrorPage: FC<Props> = () => {
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
          <h1 className="text-3xl md:text-4xl md:w-[80%]">
            Looks like an error occured
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg md:w-[80%]">
            You can{' '}
            <Button
              onClick={() => location.reload()}
              variant={'link'}
              className="p-0 h-auto text-sm md:text-base"
            >
              refresh
            </Button>{' '}
            the page or try again later. If the error persists, you can{' '}
            <Link
              href={`mailto:thechideraemmanuel@gmail.com`}
              className={cn(
                buttonVariants({ variant: 'link' }),
                'p-0 h-auto text-sm md:text-base'
              )}
            >
              contact support
            </Link>
            .
          </p>

          <Link href={'/'} className={buttonVariants()}>
            Go to homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default LinkRedirectErrorPage;
