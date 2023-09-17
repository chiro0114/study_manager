'use client';

import Button from '../Button';
import Link from 'next/link';
import { css } from '@/styled-system/css';

type SidebarItemProps = {
  items: {
    title: string;
    href: string;
  };
};

const SidebarItem: React.FC<SidebarItemProps> = ({ items }) => {
  const { title, href } = items;

  return (
    <div>
      <Link href={href}>
        <Button
          className={css({
            fontSize: '30px',
            py: '16px',
            mb: '20px',
            w: '208px',
            rounded: '50%',
            letterSpacing: '1px',
          })}
        >
          {title}
        </Button>
      </Link>
    </div>
  );
};

export default SidebarItem;
