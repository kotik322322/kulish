import Image from 'next/image'
import React from 'react'
import pict from "../../public/maine.png"

const page = () => {
  return (
    <div className='flex w-full'>
        <Image src={pict} alt='' className='w-full  bg-accent' fill />
        <Image src={pict} alt='' className='w-full  bg-accent' fill />
        <Image src={pict} alt='' className='w-full  bg-accent' fill />
    </div>
  )
}

export default page