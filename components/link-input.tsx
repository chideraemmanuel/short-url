'use client';

import { FC } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface Props {}

const LinkInput: FC<Props> = () => {
  return (
    <>
      <div className="w-[min(700px,_100%)] space-y-1">
        <div className="flex items-center gap-1 bg-secondary p-1 rounded-md">
          <Input
            placeholder="Enter link"
            className="h-12 text-base border-[2px]"
          />
          <Button className="h-[44px] p-3">Shorten link</Button>
        </div>

        <span className="block text-destructive text-sm !text-left ml-2">
          error message
        </span>
      </div>
    </>
  );
};

export default LinkInput;
