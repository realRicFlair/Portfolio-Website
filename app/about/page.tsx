import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ArrowButton from "../ui/ArrowButton";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-lg md:flex-row">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Hi, I’m Adithya Ambagaspitiya, a passionate Computer Science student currently in my second year at Simon Fraser University. 
          With a strong foundation in C/C++ and Rust, I’ve explored a diverse range of topics, from FPGA design and embedded systems to parallel computing with CUDA/PTX.<br/>
          My journey has also led me to front-end development, where I'm currently enjoying NextJS, the framework Im using right now :D
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Beyond coding, I love diving into hardware projects—most recently, I built an 8-bit TTL breadboard computer based on the SAP architecture.<br/>
          Through this, I solved complex challenges like optimizing IPC by enhancing the timing of various chips, which allowed me to boost its processing speed.
        </p>
        <ArrowButton text="Explore My Projects" href="/projects" />
      </div>
      <div className="">
        <Image
          src="/CoolMountain.jpg"
          alt="Cool pic of a mountain I got"
          width={800}
          height={800}
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}
