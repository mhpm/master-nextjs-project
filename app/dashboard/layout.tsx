import NavLink from '@/components/nav-link/NavLink';
import { ReactNode } from 'react';

const links = [
  { label: 'Dashboard', path: '', targetSegment: null },
  { label: 'Profile', path: 'profile', targetSegment: 'profile' },
  { label: 'Settings', path: 'settings', targetSegment: 'settings' },
];

// Layouts can be nested and composed
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return (
    <section className="p-2">
      <h2 className="w-full h-100 p-5 bg-neutral-400 text-white">
        Dashboard Header
      </h2>
      <div className="flex gap-2 mt-2 h-full">
        <nav className="w-[200px]">
          <div className="bg-neutral-700 text-white h-[400px] text-center flex flex-col">
            {links.map((link, index) => (
              <NavLink
                targetSegment={link.targetSegment}
                key={index}
                root="dashboard"
                slug={link.path}
                className="p-1 hover:bg-neutral-400"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
        <div className="bg-neutral-400 p-2 w-full text-white">{children}</div>
      </div>
    </section>
  );
}
