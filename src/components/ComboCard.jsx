import React from 'react';

function ComboCard({ combo }) {
  return (
    <div className='bg-white shadow-md rounded-lg p-4'>
      <h2 className='text-xl font-bold mb-2 text-primary'>{combo.name}</h2>
      <p className='text-gray-700 mb-4'>{combo.description}</p>
      <ul className='list-disc list-inside'>
        {combo.items.map((item, index) => (
          <li key={index} className='text-gray-700'>
            {item}
          </li>
        ))}
      </ul>
      <p className='text-lg font-semibold mt-2 text-jade'>${combo.price}</p>
    </div>
  );
}

export default ComboCard;
