import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { CommandLineIcon } from '@heroicons/react/24/outline';
import AcmeLogo from './acme-logo';

export default function NavbarMain() {
  return (
    <nav className="bg-black rounded-2xl p-3">
      <div className="mx-auto container flex items-center justify-between">
        <AcmeLogo />
        <div className="flex space-x-10 text-lg">
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/projects" className="text-white hover:text-gray-400">Projects</Link>
          <Link href="/about" className="text-white hover:text-gray-400">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

/*
<div className="flex h-20 shrink-0 items-end rounded-lg outline-2 bg-black p-4 md:h-30">
        <AcmeLogo />
      </div>
*/