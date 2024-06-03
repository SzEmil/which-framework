import { Button, Flex, Text } from '@mantine/core';
import Image from 'next/image';

type HeaderProps = {
  lang: string;
};

export const Header = ({ lang }: HeaderProps) => {
  return (
    <Flex align={'center'} justify={"space-between"} gap={10} pt={15} pb={15}>
      <Image
        src={'/minfdev-logo-dark.png'}
        alt="logo"
        height={40}
        width={200}
        style={{ height: 'auto', display: 'block' }}
      />
      <Flex align={'center'} gap={50}>
        <Text>What can we offer</Text>
        <Text>Case studies</Text>
      </Flex>
      <Button variant="outline">Grow your idea</Button>
    </Flex>
  );
};
