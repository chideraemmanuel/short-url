'use client';

import React, { FC } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';
import { URL_REGEX } from '@/constants';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { cn } from '@/lib/cn';

interface Props {}

const LinkInput: FC<Props> = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [inputError, setInputError] = React.useState('');
  const [responseData, setResponseData] = React.useState<{
    short_url: string;
  } | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async () => {
    if (inputValue === '') {
      setInputError('Please enter a URL');
      return;
    }

    if (!URL_REGEX.test(inputValue)) {
      setInputError('Invalid URL');
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.post<{ short_url: string }>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
        {
          url: inputValue,
        }
      );

      setIsLoading(false);
      setResponseData(response.data);

      toast.success('Link generated successfully');
      setDialogOpen(true);
    } catch (error: any) {
      setIsLoading(false);

      toast.error(
        error.response?.data?.error || error.message || 'Something went wrong'
      );
    }
  };

  return (
    <>
      <div className="w-[min(700px,_100%)] space-y-1">
        <div className="flex items-center gap-[2px] sm:gap-1 bg-secondary p-[2px] sm:p-1 rounded-md">
          <Input
            placeholder="Enter a link here"
            className={cn(
              'h-12 text-base border-[2px]',
              inputError && 'border-destructive'
            )}
            value={inputValue}
            onChange={(e) => {
              setInputError('');
              setInputValue(e.target.value);
            }}
            disabled={isLoading}
          />
          <Button
            className="h-[44px] p-3"
            onClick={() => handleSubmit()}
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="ww-4 h-4 animate-spin" />}
            Shorten link
          </Button>
        </div>

        <span className="block text-destructive text-sm !text-left ml-2">
          {inputError}
        </span>
      </div>

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="w-[95%] rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Your shortened URL is ready</AlertDialogTitle>
            <AlertDialogDescription>
              This is the shortened link you can use to share or access the page
              more easily. Click the 'Copy link' button to copy it to your
              clipboard!
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="mt-3 flex items-center justify-between gap-5 p-3 md:p-3 h-16 md:h-16 border rounded-md">
            <span className="w-[80%] truncate text-sm md:text-base">
              {process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/
              {responseData?.short_url.slice(
                responseData.short_url.lastIndexOf('/') + 1
              )}
            </span>
            <Button
              variant={'outline'}
              className="px-3 md:px-3"
              onClick={() => {
                navigator.clipboard.writeText(
                  `${
                    process.env.NEXT_PUBLIC_CLIENT_BASE_URL
                  }/${responseData?.short_url.slice(
                    responseData.short_url.lastIndexOf('/') + 1
                  )}`
                );
                toast.success('Link copied');
              }}
            >
              Copy link
            </Button>
          </div>

          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default LinkInput;
