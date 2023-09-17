import { css, cx } from '@/styled-system/css';
import SidebarItem from './SidebarItem';
import { neumorphism } from '@/styled-system/recipes';

const sidebarItems = [
  {
    title: 'Todo',
    href: '/todo',
  },
  {
    title: 'Diary',
    href: '/diary',
  },
  {
    title: 'List',
    href: '/list',
  },
  {
    title: 'Logout',
    href: '/logout',
  },
];

const Sidebar = () => {
  return (
    <div
      className={cx(
        css({ bg: 'main', borderRadius: '6px', mt: '112px', ml: '20px' }),
        neumorphism()
      )}
    >
      <ul className={css({ w: '100%', mt: '28px', mx: '8px', mb: '24px' })}>
        {sidebarItems.map((items) => (
          <SidebarItem key={items.href} items={items} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
