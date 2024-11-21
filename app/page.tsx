import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Sun, Moon } from 'lucide-react';
import ThemeSwitcher from '@/components/theme-switcher';
import LinkInput from '@/components/link-input';

export default function Home() {
  return (
    <>
      <div className="z-[5]">
        <div className="relative container md:pt-6 flex items-center justify-center min-h-screen">
          <div className="container absolute top-0 left-0 w-full flex justify-between items-center md:h-20 h-16">
            <span>Logo</span>

            <div className="flex items-center gap-3">
              <ThemeSwitcher />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 text-center py-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl md:w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg md:w-[70%]">
              deal found season supper branch development making fairly bread
              doing blanket boat fighting glass labor duty come teeth ask lips
              giant donkey block saved
            </p>

            <LinkInput />
          </div>
        </div>
      </div>
    </>
  );
}
