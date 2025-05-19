import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EggFried } from 'lucide-react';

function Header() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-primary text-white p-4 flex justify-between items-center shadow-md'>
      <div className='flex items-center gap-2'>
        <EggFried className='w-6 h-6 text-white' />
        <h1 className='text-2xl font-heading font-bold'>Hong Kong Express</h1>
      </div>
      <div className='space-x-6 font-body text-lg'>
        {['/', '/menu'].map((path, idx) => (
          <motion.div
            key={path}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block'>
            <Link to={path} className='hover:underline'>
              {idx === 0 ? 'Home' : 'Menu'}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}

export default Header;
