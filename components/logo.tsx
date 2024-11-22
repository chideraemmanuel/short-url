import { cn } from '@/lib/cn';
import Link from 'next/link';
import React, { ComponentPropsWithoutRef, ElementRef } from 'react';

type LogoPropTypes = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>;

type LogoRefTypes = ElementRef<typeof Link>;

const Logo = React.forwardRef<LogoRefTypes, LogoPropTypes>(
  ({ className, ...props }, ref) => {
    return (
      <>
        <Link
          href={'/'}
          className={cn('text-2xl font-semibold', className)}
          {...props}
          ref={ref}
        >
          Short<span className="text-primary">URL</span>
        </Link>
      </>
    );
  }
);

export default Logo;
