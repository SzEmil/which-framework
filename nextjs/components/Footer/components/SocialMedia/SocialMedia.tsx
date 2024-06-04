import { Flex } from '@mantine/core';
import { SOCIAL_MEDIA } from '@/constants';
import Link from 'next/link';
import css from './SocialMedia.module.css';

export const SocialMedia = () => {
  return (
    <Flex gap={10}>
      {SOCIAL_MEDIA.map(social => (
        <Link key={social.name} href={social.href}>
          <social.icon
            color="#30e78b"
            size={36}
            className={css.icon}
          />
        </Link>
      ))}
    </Flex>
  );
};
