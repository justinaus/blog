import { AppShell, Avatar, Container, Flex } from '@mantine/core';
import Link from 'next/link';

import Logo from '../shared/Logo';

export default function PageLayout({ children }: React.PropsWithChildren) {
  // const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 70 }}
      // navbar={{
      //   width: 300,
      //   breakpoint: 'sm',
      //   collapsed: { mobile: !opened },
      // }}
      // padding="md"
      // maw={'50rem'}
      // style={{
      //   margin: '0 auto',
      // }}
    >
      <AppShell.Header bd={'none'}>
        <Container size={'sm'} h={'100%'} px={'xl'}>
          <Flex align={'center'} justify={'space-between'} h={'100%'}>
            <Link href="/">
              <Logo />
            </Link>
            <Avatar
              component="a"
              href="https://github.com/justinaus"
              target="_blank"
              src="https://github.com/justinaus.png"
              alt="it's me"
              size={'md'}
            />
          </Flex>
        </Container>
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
      </AppShell.Header>
      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}
      <AppShell.Main>
        {children}
        {/* <Container size={'sm'} pt={'md'} pb={'xl'}>
          <Stack gap="xl">{children}</Stack>
        </Container> */}
      </AppShell.Main>
    </AppShell>
  );
}
