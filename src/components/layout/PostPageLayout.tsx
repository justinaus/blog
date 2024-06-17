import { AppShell, Avatar, Container, Flex, Stack } from '@mantine/core';

import Logo from '../shared/Logo';

export default function PostPageLayout({ children }: React.PropsWithChildren) {
  // const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
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
        <Container size={'sm'} h={'100%'}>
          <Flex align={'center'} justify={'space-between'} h={'100%'}>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- 새로고침 */}
            <a href="/">
              <Logo />
            </a>
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
        <Container size={'sm'}>
          <Stack gap="xl">{children}</Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
