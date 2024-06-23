import { Stack, Text, Title } from '@mantine/core';
import { format } from 'date-fns';
import Link, { LinkProps } from 'next/link';
import { useMemo } from 'react';

type Props = {
  title: string;
  description?: string;
  dateStringYYYYMMDD: string;
} & Pick<LinkProps, 'href'>;

export default function Article({
  title,
  description,
  dateStringYYYYMMDD,
  href,
}: Props) {
  const dateText = useMemo(() => {
    return format(new Date(dateStringYYYYMMDD), 'MMMM dd, yyyy');
  }, [dateStringYYYYMMDD]);

  return (
    <Link href={href}>
      <Stack component={'article'} gap={'xs'}>
        <Title order={2} c={'bloodOrange.9'} size={'h3'} fw={900}>
          {title}
        </Title>
        <Text fw={300} c={'gray.8'}>
          {dateText}
        </Text>
        <Text fw={600} c={'gray.8'}>
          {description}
        </Text>
      </Stack>
    </Link>
  );
}
