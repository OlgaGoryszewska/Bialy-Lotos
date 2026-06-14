import React from 'react'
import Image from 'next/image'
import { Menu } from './Menu'
import logoText from '../assets/img/logoText.png'

export const Nav = () => {
  return (
    <header className="flex justify-between h-11">
      <Image
        src={logoText}
        alt="Logo Text"
        width={100}
        height={40}
        className="m-1.5 ml-2"
      />
      <Menu />
    </header>
  )
}
