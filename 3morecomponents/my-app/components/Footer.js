import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
        <footer className='flex justify-around bg-slate-800 text-white py-4 text-xs'>
            <div className="logo font-bold">CopyRight 2025 | All rights reserved</div>
        <ul className='flex gap-6'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
        </ul> 
    </footer>  
  )
}

export default Footer