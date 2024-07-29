import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { useState, Suspense } from 'react';
//import RotatingGlassCube from './ui/glassCube';
import dynamic from 'next/dynamic'
import { LazyMotion, domAnimation, m } from "framer-motion";

import AboutSection from './aboutsection';
import NavbarMain from './ui/NavbarMain';
import ProjectsSnippet from './ui/ProjectsSnippet';

const RotatingGlassCube = dynamic(() => import('./ui/glassCube'))




export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <NavbarMain />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              Hi I'm <strong>Adi</strong>, a passionate CS student currently stuying at SFU
            </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 md:text-base"
          >
            <span>See my latest projects</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-1/2 md:px-10 md:py-12">
          <Suspense fallback={<div>Loading...</div>}>
            <RotatingGlassCube />
          </Suspense>
        </div>
      </div>

      <div className="mt-10 md:mt-20">
      <AboutSection />
      <ProjectsSnippet />
      </div>
    </main>
  );
}
