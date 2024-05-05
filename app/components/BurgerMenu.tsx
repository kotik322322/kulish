"use client"
import React, { useState } from 'react';
import BurgerMenuButton from './BurgerMenuButton';
import BurgerMenuContent from './BurgerMenuContent';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <BurgerMenuButton  toggleMenu={toggleMenu} isOpen={isOpen}/>
      {isOpen && <BurgerMenuContent/>}
    </div>
  );
};

export default BurgerMenu;
