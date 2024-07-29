"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "@/app/misc/utils";

export function HeadingDivider({ title = "" }) {
	return (
		<header className="flex items-center">
			<LazyMotion features={domAnimation}>
				<m.div
					tabIndex={0}
					initial={initial}
					animate={animate}
					exit={exit}
					transition={transition}
					className="pr-4 font-bold text-5xl"
				>
					{title}
				</m.div>
			</LazyMotion>
            
			<hr className="flex-grow h-0.5 bg-black"></hr>
		</header>
	);
}