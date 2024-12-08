import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Image src="/images/Page Headers.png" alt='pic' height={100} width={100} />
      <Image src="/images/Features (1).png"alt='pic2' height={100} width={100} />
      <Image src="/images/Features (2).png" alt='pic3' height={100} width={100} />


    </div>
  )
}

export default page