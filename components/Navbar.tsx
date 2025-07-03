import React from 'react'

const Navbar = () => {
  return (
    <header className='navbar'>
        <nav>
          <Link href="/">
            <Image src="/assets/images/2x/logo.png" alt="Logo" width={32} height={32}/>
          </Link>
        </nav>
    </header>
  )
}

export default Navbar