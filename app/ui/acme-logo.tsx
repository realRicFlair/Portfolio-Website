import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { CommandLineIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts'

export default function AcmeLogo() {
  return (
    <div className={`${inter.className} flex flex-row items-center leading-none text-white`}>
      <CommandLineIcon className="h-12 w-12 mr-5" />
      <p className="text-[40px]">Adithya Amb</p>
    </div>
  );
}
