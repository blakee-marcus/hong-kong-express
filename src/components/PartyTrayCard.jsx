import React from 'react';

function PartyTrayCard({ partyTray }) {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 m-4 max-w-md'>
      <h2 className='text-2xl font-heading font-semibold mb-3 text-primary'>{partyTray.name}</h2>
      <p className='text-jade mb-5 font-body'>{partyTray.description}</p>
      <ul className='list-disc list-inside text-gray-700 space-y-1'>
        {partyTray.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className='mt-4 text-sm text-gray-500 italic'>
        Available for pick-up or delivery at 627 Magnolia Ave #102, Long Beach, CA 90802.
      </p>
    </div>
  );
}

export default PartyTrayCard;
