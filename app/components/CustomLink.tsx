import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface CustomLinkProps {
  href: string;
  title: string;
}

const CustomLink = ({ href, title }: CustomLinkProps) => {
  const pathName = usePathname();
  return (
    <li>
      <Link href={href} className={`relative group font-semibold`}>
        {title}
        <span
          className={`h-[1px] inline-block w-0  bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            pathName === href ? 'w-full' : 'w-0' 
          }`}>
          &nbsp;
        </span>
      </Link>
    </li>
  );
};

export default CustomLink;
