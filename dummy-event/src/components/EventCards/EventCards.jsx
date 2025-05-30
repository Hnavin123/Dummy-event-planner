import React from 'react'

const EventCards = ({image, title}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
            <img src={image} alt={title} className='w-full h-48 object-cover' />
            <div className='p-4'>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
            </div>
        </div>
    )
}

export default EventCards