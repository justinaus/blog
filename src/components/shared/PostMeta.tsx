import { Flex, Stack, StackProps, Text } from '@mantine/core';
import { format } from 'date-fns';
import Link from 'next/link';
import { useMemo } from 'react';

export default function PostMeta({
  children,
  ...rest
}: React.PropsWithChildren<StackProps>) {
  return (
    <Stack gap={0} align="flex-end" {...rest}>
      {children}
    </Stack>
  );
}

function DateText({
  dateStringYYYYMMDD,
}: {
  dateStringYYYYMMDD: string; // '2023-10-03', '2023-10-03T00:00:00.000Z'
}) {
  const dateText = useMemo(() => {
    return format(new Date(dateStringYYYYMMDD), 'MMMM dd, yyyy');
  }, [dateStringYYYYMMDD]);

  return (
    <Text size="md" c={'gray'} fw={'bold'}>
      {dateText}
    </Text>
  );
}

function Source({ text, url }: { text?: string; url: string }) {
  return (
    <Flex gap={'xs'} align={'center'} direction={'row'}>
      <Text size="sm" c="dark">
        원문:{' '}
      </Text>
      <Link href={url} target="_blank">
        <Text size="xl" td={'underline'} c="blue" fw={'900'}>
          {text || url}
        </Text>
      </Link>
    </Flex>
  );
}

PostMeta.DateText = DateText;
PostMeta.Source = Source;
