'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const is404Page =
    pathname === '/404' ||
    pathname === '/not-found' ||
    pathname.startsWith('/not-found');

  return (
    <>
      {!is404Page && <Navbar />}
      {children}
    </>
  );
}
