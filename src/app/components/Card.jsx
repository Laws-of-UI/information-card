'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { laws } from '../../../data/laws.js';

const gradients = [
  { gradient: 'from-blue-500 to-purple-600', border: 'border-blue-500' },
  { gradient: 'from-green-400 to-blue-500', border: 'border-green-400' },
  { gradient: 'from-pink-500 to-red-500', border: 'border-pink-500' },
  { gradient: 'from-yellow-400 to-orange-500', border: 'border-yellow-400' },
  { gradient: 'from-indigo-500 to-purple-500', border: 'border-indigo-500' },
  { gradient: 'from-red-500 to-pink-500', border: 'border-red-500' },
  { gradient: 'from-teal-400 to-blue-500', border: 'border-teal-400' },
  { gradient: 'from-orange-400 to-pink-500', border: 'border-orange-400' },
  { gradient: 'from-blue-400 to-indigo-500', border: 'border-blue-400' },
  { gradient: 'from-green-500 to-teal-500', border: 'border-green-500' },
  { gradient: 'from-purple-500 to-indigo-500', border: 'border-purple-500' },
  { gradient: 'from-yellow-500 to-red-500', border: 'border-yellow-500' },
  { gradient: 'from-blue-500 to-teal-400', border: 'border-blue-500' },
];

const Cards = ({}) => {
  const formatNameForUrl = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 relative z-10 pb-32'
    >
      {laws.map((law) => {
        const IconComponent = LucideIcons[law.icon];
        const { gradient, border } =
          gradients[(law.number - 1) % gradients.length];

        return (
          <Link key={law.number} href={'#'} passHref className='no-focus'>
            <motion.div
              key={law.number}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`shadow rounded-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group border ${border}`}
            >
              <div className='no-focus bg-zinc-950 absolute inset-0 w-full h-full'></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-200 ease-linear`}
              ></div>
              <div className='p-6 py-10 relative z-10'>
                <div className='flex items-center mb-4'>
                  <div className='p-3 bg-white/10 rounded-full mr-4'>
                    {IconComponent && (
                      <IconComponent className='w-6 h-6 text-white' />
                    )}
                  </div>
                  <h3 className='md:text-4xl text-xl font-bold text-white'>
                    {law.name}
                  </h3>
                </div>
                <p className='text-sm text-white/80 mb-4'>{law.description}</p>
                <div className='flex justify-between items-center relative z-10'>
                  <button className='mt-4 bg-white/10 group cursor-pointer relative shadow-2xl shadow-black/20 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block focus-accessible'>
                    <span className='absolute inset-0 overflow-hidden rounded-full'>
                      <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                    </span>
                    <div className='relative flex space-x-2 items-center z-10 rounded-full bg-black/30 py-1 px-4 ring-1 ring-white/10'>
                      <span className='select-none'>Learn More</span>
                      <LucideIcons.MoveUpRight className='w-3 h-3 text-white' />
                    </div>
                    <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-white/90 to-white/0 transition-opacity duration-500 group-hover:opacity-40' />
                  </button>
                </div>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default Cards;
