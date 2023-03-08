import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/tvs-logo.png'
const Header = () => {
  return (
   <header className='header-wrap'>
     <div className='container'>
        <div className="headerstriplit">
           <Link href="#">
            <Image alt='Logo' className='img-fluid' src={logo} width={130} height={22}></Image>
           </Link>
        </div>
     </div>
   </header>
  )
}

export default Header