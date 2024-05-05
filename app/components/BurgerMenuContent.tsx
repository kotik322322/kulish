'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CustomLink from './CustomLink';

interface BurgerMenuContentProps {
  isOpen: boolean;
}

const BurgerMenuContent = ({ isOpen }: BurgerMenuContentProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          exit={{ x: '-100%', transition: { duration: 0.5 } }}
          className="fixed top-0 bottom-0 left-0 right-0 bg-accent/50 w-full h-full z-40 text-white">
          <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8 font-semibold text-xl">
            <CustomLink title="About" href="/about" />
            <CustomLink title="Content" href="/" />
            <CustomLink title="Contact" href="/" />
            <CustomLink title="Gallery" href="/" />
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BurgerMenuContent;
