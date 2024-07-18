import Image from 'next/image';
import Cards from './components/Card';
import { Navigation, ShareIcon } from 'lucide-react';
import Link from 'next/link';
import Footer from './components/footer';
import NavBar from './components/Navigation';

export default function Home() {
  return (
    <div className='bg-zinc-950 flex min-h-screen flex-col items-center justify-between'>
      <NavBar />
      <main className='flex p-3 md:p-10 md:pt-4 pt-3 relative z-10 flex-col items-center justify-between'>
        <div className='flex flex-col items-center justify-center pb-40 gap-4'>
          <p className='mb-4 text-zinc-200 text-xl font-semibold p-4 rounded-md border-zinc-200 border shadow-xl shadow-black'>
            Informational Card Component
          </p>
          <Cards />
        </div>
        <Link
          href={'https://www.uilaws.com/components'}
          target='_blank'
          className='flex items-center gap-3'
        >
          <div className='rounded-md shadow-xl shadow-black mb-20'>
            <Image
              src='/banner.png'
              width={400}
              height={400}
              className='rounded-md rounded-b-none'
            />
            <div className='flex items-center gap-3 border-zinc-300 bg-zinc-800 p-3 px-6 rounded-md rounded-t-none'>
              <p className='text-zinc-200'>View our Component Library</p>
              <Navigation className='text-white h-4 w-4' />
            </div>
          </div>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
