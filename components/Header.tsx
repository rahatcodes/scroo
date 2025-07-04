import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({subHeader,title,userImg} : SharedHeaderProps) => {
  return (
    <header className='header'>
      <section className='header-container'>
        <div className='details'>
          {userImg && (
            <Image src={userImg || 'assets/images/dummy.jpg'} alt='User Image' width={66} height={66} className='rounded-full' />
          )}

          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </div>

        <aside>
          <Link href='/upload'>
            <Image src='/assets/icons/upload.svg' alt='Upload Icon' width={16} height={16} />
            <span>Upload A Video</span>
          </Link>
        </aside>

      </section>
    </header>
  )
}

export default Header