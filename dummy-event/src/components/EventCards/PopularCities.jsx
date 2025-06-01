import React from 'react';
import EventCards from './EventCards';

const PopularCities = () => {
  const popularcities = [
    {
      image: 'https://cdn.eventplanner.net/imgs/item-c008015/hpc008015-mobile-evenementenlocatie-huren@2x.jpg',
      title: 'Event Venue Rental',
    },
    {
      image: 'https://cdn.eventplanner.net/imgs/item-c006002/hpc006002-mobile-catering-traiteur@2x.jpg',
      title: 'Event Catering',
    },
    {
      image: 'https://cdn.eventplanner.net/imgs/item-c018003/hpc018003-mobile-evenementenbureau@2x.jpg',
      title: 'Event Agencies',
    },
  ];

  return (
    <div className='flex justify-center gap-8 flex-wrap px-10 py-10'>
      {PopularCities.map((event, index) => (
        <EventCards
          key={index}
          image={event.image}
          title={event.title}
        />
      ))}
    </div>
  );
};

export default PopularCities;
