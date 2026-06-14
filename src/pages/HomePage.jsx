import React from 'react'
import Image from 'next/image'
import Face from '../assets/img/faceTwo.png'
import { Nav } from '../components/Nav'

const HomePage = () => {
  return (
    <>
      <Nav className="absolute" />
      <div className="relative w-full">
        <Image
          src={Face}
          alt="bialy lotos ciechanow main picture of a women face"
          width={800}
          height={800}
          className="relative w-full h-auto"
        />
      </div>
    </>
  )
}

export default HomePage
