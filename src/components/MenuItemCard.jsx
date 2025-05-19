import React from 'react';

function MenuItemCard({ title, description, price, image }) {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm'>
      <img src={image} alt={title} className='w-full h-44 object-cover' />
      <div className='p-5'>
        <h2 className='text-2xl font-heading font-semibold text-primary'>{title}</h2>
        <p className='mt-2 text-gray-700 font-body'>{description}</p>
        <p className='mt-4 text-jade font-bold text-lg'>{price}</p>
      </div>
    </div>
  );
}

export default MenuItemCard;
