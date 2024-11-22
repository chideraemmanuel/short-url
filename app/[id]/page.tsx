import { notFound, redirect } from 'next/navigation';
import { FC } from 'react';

interface Props {
  params: Promise<{ id: string }>;
}

const findURLRecord = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}/find`
  );

  if (!response.ok) {
    if (response.status === 404) return null;

    const error_response: { error: string } = await response.json();
    throw new Error(error_response.error);
  }

  const success_response: { url_id: string; destination_url: string } | '' =
    await response.json();

  return success_response;
};

const LinkRedirectPage: FC<Props> = async ({ params }) => {
  const { id } = await params;
  const record = await findURLRecord(id);

  if (record === '' || !record) notFound();

  redirect(record.destination_url);

  //   return null
};

export default LinkRedirectPage;
