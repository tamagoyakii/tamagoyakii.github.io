import Link from 'next/link';
import NavButton from '@/components/layout/NavButton';

export default function Header() {
  const navButtons = [
    {
      content: 'About',
      route: '/about',
    },
    {
      content: 'Project',
      route: '/project',
    },
    {
      content: 'Experience',
      route: '/experience',
    },
  ];

  return (
    <div className='flex justify-between items-center w-full fixed'>
      <Link href='/'>icon</Link>
      <div className='flex justify-evenly items-center gap-10'>
        {navButtons.map(({ content, route }, i) => (
          <NavButton content={content} route={route} key={`${i}${content}`} />
        ))}
      </div>
    </div>
  );
}
