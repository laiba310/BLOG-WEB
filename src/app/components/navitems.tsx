'use client';


import Link from 'next/link';

import React from 'react';
import Home from '../page';
import { HousePlus, TableOfContents, UserPen } from 'lucide-react';

const NavItems = () => {

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
     
       
        
 <li className='md:flex-between flex w-full items-start gap-5'>
  <Link href="/"
        
        className="text-black hover:text-blue-500 flex gap-2">
<HousePlus />
Home
  </Link>
  <Link href="/blog" className="text-black hover:text-blue-500  flex gap-2">
  <TableOfContents />
Blog
  </Link>
  <Link href="/contact" className="text-black hover:text-blue-500 flex gap-2">
  < UserPen />
    Contact Us
  </Link>
          </li>
        
    </ul>
  );
};

export default NavItems;
