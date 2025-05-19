import React from 'react';
import { combos, entrees, partyTrays } from '../data/menu';
import { motion } from 'framer-motion';
import { ForkKnife, Gift, ChevronLeft } from 'lucide-react';

const Menu = () => (
  <div className='min-h-screen bg-offwhite text-secondary font-body p-8 max-w-4xl mx-auto'>
    <h1 className='text-4xl font-heading font-bold mb-8 text-center'>Menu</h1>

    {/* Combos Section */}
    <section className='mb-10'>
      <h2 className='text-2xl font-heading font-semibold border-b-2 border-primary pb-2 mb-4'>
        Combos
      </h2>
      <ul>
        {combos.map(({ id, name, description, price }) => (
          <li key={id} className='mb-4 flex justify-between border-b border-gray-300 pb-2'>
            <div>
              <h3 className='text-lg font-semibold'>{name}</h3>
              <p className='text-sm text-gray-700'>{description}</p>
            </div>
            <span className='font-semibold text-primary'>${price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Entrees Section */}
    <section className='mb-10'>
      <h2 className='text-2xl font-heading font-semibold border-b-2 border-primary pb-2 mb-4'>
        Entrees
      </h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {entrees.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className='border border-gray-300 rounded-md p-3 text-center font-semibold hover:bg-primary hover:text-offwhite transition cursor-default'>
            {item}
          </motion.li>
        ))}
      </ul>
    </section>

    {/* Party Trays Section */}
    <section className='mb-10'>
      <h2 className='text-2xl font-heading font-semibold border-b-2 border-primary pb-2 mb-4'>
        Party Trays
      </h2>
      {partyTrays.map(({ name, description }) => (
        <div key={name} className='border border-gray-300 rounded-md p-4'>
          <h3 className='text-lg font-semibold mb-1'>{name}</h3>
          <p className='text-gray-700'>{description}</p>
        </div>
      ))}
    </section>

    <div className='text-center'>
      <motion.a
        href='/'
        whileHover={{ scale: 1.05 }}
        className='inline-block mt-6 bg-secondary text-offwhite px-6 py-3 rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2'>
        <ChevronLeft size={18} /> Back to Home
      </motion.a>
    </div>
  </div>
);

export default Menu;
