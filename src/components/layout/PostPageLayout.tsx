import { AppShell, Stack, Text } from '@mantine/core';
import { format } from 'date-fns';
import { useMemo } from 'react';

type Props = {
  date: string; // '2023-10-03', '2023-10-03T00:00:00.000Z'
};

export default function PostPageLayout({
  date,
  children,
}: React.PropsWithChildren<Props>) {
  // const [opened, { toggle }] = useDisclosure();

  const dateText = useMemo(() => {
    return format(new Date(date), 'MMMM dd, yyyy');
  }, [date]);

  return (
    <AppShell
      header={{ height: 60 }}
      // navbar={{
      //   width: 300,
      //   breakpoint: 'sm',
      //   collapsed: { mobile: !opened },
      // }}
      // padding="md"
      maw={'50rem'}
      style={{
        margin: '0 auto',
      }}
    >
      <AppShell.Header
        px={'xl'}
        maw={'50rem'}
        bd={'none'}
        style={{
          margin: '0 auto',
        }}
      >
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
        <div>Logo</div>
      </AppShell.Header>
      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}
      <AppShell.Main>
        <Stack gap="xl" p={'xl'}>
          <Text>{dateText}</Text>
          {children}
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
