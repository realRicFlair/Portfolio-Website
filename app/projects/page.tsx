import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Project One', description: 'Description of Project One' },
  { id: 2, title: 'Project Two', description: 'Description of Project Two' },
  { id: 3, title: 'Project Three', description: 'Description of Project Three' },
  { id: 4, title: 'Project Four', description: 'Description of Project Four' },
];

export default function Page() {
  return (
    <section>
    <div className="container mx-auto px-4 py-8">
      <h1>
        Hi! This page is still in development. It'l be done after a bit
      </h1>
    </div>
    </section>
  );

}

