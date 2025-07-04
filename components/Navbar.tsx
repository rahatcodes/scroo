import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const user = {};
const Navbar = () => {
  return (
    <header className='navbar'>
        <nav>
          <Link href="/">
            <Image src="/assets/icons/logo.png.png" alt="Logo" width={32} height={32}/>
            <h1>Scroo</h1>
          </Link>
          
          {user && (
            <figure>
              <button>
                <Image src="/assets/images/dummy.jpg" alt="User Icon" width={32} height={32} className='rounded-full aspect-square'/>
              </button>
              <button>
                <Image src="/assets/icons/logout.svg" alt="Logout Icon" width={24} height={24} className='rotate-180'/>
              </button>
            </figure>
          )}

        </nav>
    </header>
  )
}

export default Navbar