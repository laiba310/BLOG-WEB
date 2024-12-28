import Link from 'next/link'
import React from 'react'
import Navitems from './navitems'
import MobileNav from './MobileNav'

const header = () => {
  return (
    <div>
      <header className='w-full border-b'>
    <div className='wrapper flex items-center justify-between'>
 <Link href="/">
  <img src="/file.png" alt="" className='w-[10rem] h-[6rem]' />
 </Link>
 <nav className='md:flex-between hidden w-full max-w-xs  '>
 <Navitems />
 </nav>

 <MobileNav />
    </div>
      </header>

    </div>
  )
}

export default header