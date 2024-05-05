'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const BurgerMenuContent = () => {
  return (
    <motion.div initial={{x:"-100%"}} animate={{x:0, transition:{duration:1}}} className="absolute top-0 bottom-0 left-0 right-0 bg-accent/75 w-full h-full z-40 text-white">
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-10">
        <li>
          <Link href="/">About</Link>
        </li>

        <li>
          <Link href="/">Content</Link>
        </li>

        <li>
          <Link href="/">Contacts</Link>
        </li>

        <li>
          <Link href="/">Gallery</Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default BurgerMenuContent;
