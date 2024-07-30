import Link from "next/link"
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ArrowButton({ text = "", href = "" }){
    return (
        <Link
            href={href}
            className="inline-flex items-center gap-2 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            <span>{text}</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
    )
}
