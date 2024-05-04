import React from 'react'
import logo from "../../public/logo.svg"
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='absolute w-40 h-20 left-1/2 -translate-x-1/2 top-4'>
      <Image src={logo} alt='Logo'/>
    </div>
  )
}

export default Logo