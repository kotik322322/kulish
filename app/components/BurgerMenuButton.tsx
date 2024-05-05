import React from 'react';

interface BurgerMenuButtonProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const BurgerMenuButton = ({ toggleMenu, isOpen }: BurgerMenuButtonProps) => {
  return (
    <div className="absolute right-2 top-7 z-50">
      <button
        className="flex flex-col justify-center items-center gap-y-0.5 hover:cursor-pointer"
        onClick={toggleMenu}>
        <span
          className={`bg-accent h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? 'rotate-45 translate-y-1 bg-white' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`bg-accent h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <span
          className={`bg-accent h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? '-rotate-45 -translate-y-1 bg-white' : 'translate-y-0.5'
          }`}
        />
      </button>
    </div>
  );
};

export default BurgerMenuButton;
