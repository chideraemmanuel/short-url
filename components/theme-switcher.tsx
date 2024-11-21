'use client';

import { FC } from 'react';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/providers/theme-provider';

interface Props {}

const ThemeSwitcher: FC<Props> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === 'dark' ? (
        <Button
          variant={'ghost'}
          size={'icon'}
          onClick={() => setTheme('light')}
        >
          <Sun />
        </Button>
      ) : (
        <Button
          variant={'ghost'}
          size={'icon'}
          onClick={() => setTheme('dark')}
        >
          <Moon />
        </Button>
      )}
    </>
  );
};

export default ThemeSwitcher;
