import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LinkPreview } from './LinkPreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-black w-screen backdrop-blur-lg py-8 mt-20'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <Link href={'https://uilaws.com/'} target='_blank'>
              <Image
                src='/laws-of-ui.png'
                width={50}
                height={50}
                className='rounded-xl overflow-hidden'
                alt='Laws of UI Logo'
              />
              <h3 className='text-lg font-semibold text-gray-100 mb-4'>
                Laws of UI
              </h3>
            </Link>
            <p className='text-sm text-gray-300'>
              Discover the fundamental principles that shape intuitive and
              effective user interfaces.
            </p>
            <Link
              href='https://twitter.com/lawsofui'
              target='_blank'
              className='-mx-3 mt-4 w-max block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-zinc-900'
            >
              <FontAwesomeIcon icon={faXTwitter} className='w-5 h-5' />
            </Link>
          </div>
          {/* Other sections commented out */}
        </div>
        <div className='flex justify-between items-center mt-8 pt-8 border-t border-gray-800'>
          <p className='text-center text-sm text-gray-400'>
            &copy; {new Date().getFullYear()} Laws of UI. All rights reserved.
          </p>
          <LinkPreview url={'https://www.nickygee.com/'} target='_blank'>
            <Link
              href='https://www.nickygee.com/'
              target='_blank'
              className='flex items-center gap-1 text-zinc-300 text-sm'
            >
              Crafted by{' '}
              <p className='text-zinc-300 hover:text-white transition-colors'>
                👽
              </p>
            </Link>
          </LinkPreview>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
