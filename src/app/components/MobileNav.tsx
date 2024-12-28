import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Navitems from './navitems'
  
const MobileNav = () => {
  return (
   <nav className='md:hidden'>
<Sheet>
  <SheetTrigger className='align-middle'>
    <Image
    src="/menu.png"
    alt='menu'
    width={24}
    height={24}
    className='cursor-pointer '
    />
  </SheetTrigger>
  <SheetContent  className='flex flex-col gap-6 bg-white md:hidden'>
    <h1>RECIPES</h1>
    <Separator className='border border-gray-50' />
 <Navitems />
  </SheetContent>
</Sheet>

   </nav>
  )
}

export default MobileNav