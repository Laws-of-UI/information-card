import React from 'react';
import { Menu, X, Phone, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className='bg-zinc-900/50 select-none backdrop-blur-lg w-screen'>
      <nav
        aria-label='Global'
        className='mx-auto flex items-center justify-between p-4 lg:px-8'
      >
        <div className='flex w-full justify-between'>
          <Link
            href={'https://www.uilaws.com/components'}
            target='_blank'
            className='-m-1.5 p-1.5'
          >
            <span className='sr-only'>UI</span>
            <Image
              src='/laws-of-ui.png'
              width={50}
              height={50}
              className='rounded-xl overflow-hidden'
              alt='Laws of UI Logo'
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            // onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-100'
          >
            <span className='sr-only'>Open main menu</span>
            <Menu aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'></div>
      </nav>
    </header>
  );
};

export default NavBar;
