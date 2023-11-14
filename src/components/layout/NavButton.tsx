import Link from 'next/link';

export default function NavButton({
  content,
  route,
}: {
  content: string;
  route: string;
}) {
  return (
    <Link href={route}>
      <div>{content}</div>
    </Link>
  );
}
