import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, ScrollText } from 'lucide-react';

function Home() {
  return (
    <div className='min-h-screen bg-offwhite text-secondary font-body flex flex-col items-center justify-center'>
      {/* Hero Section */}
      <section className='relative w-full bg-[url("/your-hero-image.jpg")] bg-cover bg-center text-white py-24 px-6 shadow-inner'>
        <div className='absolute inset-0 bg-gradient-to-br from-black/60 to-primary/80 z-0' />
        <div className='relative z-10 text-center max-w-2xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-5xl font-heading tracking-tight font-bold drop-shadow-md mb-4'>
            Hong Kong Express
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='text-xl drop-shadow-sm mb-6'>
            Fresh, fast, and flavorful Chinese food in the heart of Long Beach.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='motion-safe:will-change-transform'>
              <Link
                to='/menu'
                className='inline-block bg-amber-950 backdrop-blur-md text-primary font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-white transition'>
                View Menu
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className='text-white/80 mt-8'>
            <ScrollText className='mx-auto h-6 w-6' />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl text-center mt-12 mx-4'>
        <h2 className='text-3xl font-heading text-primary font-bold mb-6'>Contact & Hours</h2>

        <div className='text-left space-y-4'>
          <div className='flex items-start gap-3'>
            <MapPin className='text-primary mt-1' />
            <div>
              <p className='font-semibold'>Address</p>
              <a
                href='https://www.google.com/maps/place/Hong+Kong+Express/@33.775085,-118.1985765,20.85z/data=!4m6!3m5!1s0x80dd314914fdf081:0x36db2fd7f09fc53!8m2!3d33.7748811!4d-118.1984388!16s%2Fg%2F11c0ptv6f4?entry=ttu'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:underline block text-sm'>
                627 Magnolia Ave #102, Long Beach, CA 90802
              </a>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <Phone className='text-primary' />
            <p className='font-semibold'>
              <a href='tel:+17143318870' className='text-primary hover:underline'>
                +1 (714) 331-8870
              </a>
            </p>
          </div>

          <div className='flex items-start gap-3'>
            <Clock className='text-primary mt-1' />
            <div>
              <p className='font-semibold mb-1'>Hours</p>
              <ul className='text-sm space-y-1'>
                <li>
                  <strong>Sunday:</strong> 11 AM – 5 PM
                </li>
                <li>
                  <strong>Monday - Tuesday:</strong> 11:30 AM – 6:30 PM
                </li>
                <li>
                  <strong>Wednesday:</strong> Closed
                </li>
                <li>
                  <strong>Thursday - Saturday:</strong> 11:30 AM – 6:30 PM
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-6'>
          <iframe
            title='Hong Kong Express Map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.5533254876053!2d-118.20098722374042!3d33.774881073247105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd314914fdf081%3A0x36db2fd7f09fc53!2sHong%20Kong%20Express!5e0!3m2!1sen!2sus!4v1716154939707!5m2!1sen!2sus'
            width='100%'
            height='250'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='rounded-md border border-gray-300'></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;
