import ThemeSwitcher from '@/components/theme-switcher';
import LinkInput from '@/components/link-input';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="z-[5]">
        <div className="relative container md:pt-6 flex items-center justify-center min-h-screen">
          <div className="container absolute top-0 left-0 w-full flex justify-between items-center md:h-20 h-16">
            <Link href={'/'} className="text-2xl font-semibold">
              Short<span className="text-primary">URL</span>
            </Link>

            <div className="flex items-center gap-3">
              <ThemeSwitcher />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 text-center py-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl md:w-[90%]">
              {/* Shorten Your Links in Seconds */}
              Fast, Easy Link Shortening
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg md:w-[70%]">
              Quickly turn long URLs into easy-to-share links. No fuss, no
              sign-ups — just simple link shortening.
            </p>

            <LinkInput />
          </div>
        </div>
      </div>
    </>
  );
}
