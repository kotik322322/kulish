import React from 'react'
import logo from "../../public/logo.svg"
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className='inline-block absolute w-[100px] h-[32px] left-1/2 -translate-x-1/2 top-4 z-50'>
      <Image src={logo} alt='Logo'/>
    </Link>
  )
}

export default Logo