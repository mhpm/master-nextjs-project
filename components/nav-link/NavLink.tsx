'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

// This *client* component will be imported into a blog layout
export default function NavLink({
  root,
  slug,
  targetSegment,
  className,
  children,
}: {
  root: string;
  slug: string;
  targetSegment: string | null;
  className: string;
  children: React.ReactNode;
}) {
  // Navigating to `/blog/hello-world` will return 'hello-world'
  // for the selected layout segment
  const segment = useSelectedLayoutSegment();
  const isActive = targetSegment === segment;

  return (
    <Link
      href={`/${root}/${slug}`}
      className={`${className} ${isActive && 'font-bold text-blue-500'}`}
    >
      {children}
    </Link>
  );
}
