import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import BusinessEventCards from '../../components/EventCards/BusinessEventCards';
const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('business');

    return (
        <>
            <div className='w-full h-max flex items-center justify-center'>
                <img src="https://cdn.eventplanner.net/imgs/adv-2772/46212-hp-sb-desktop-event-lounge@2x.jpg" alt="" />
            
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full max-w-xl px-0">
                    <h2 className='text-blue-50 text-[30px] mb-2'>Find <span className='font-bold'>best event planner</span> and 
                    <span className='font-bold'> event venues</span></h2>
                    <form className="flex bg-white rounded-full shadow-lg overflow-hidden ">
                        <input type="text" placeholder="Search events, venues, vendors..." className="flex-grow px-4 py-3 text-gray-700 outline-none"/>
                        <button
                            type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-full">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {/* <div className='m-20 '>
                <h2 className='text-4xl font-bold mb-6'>Getting Started</h2>
                    <ul className="flex gap-6 text-gray-700 font-medium text-lg">
                            <li className='hover:text-blue-500 cursor-pointer'><Link to='/venues'>Business Event</Link></li>
                            <li className='hover:text-blue-500 cursor-pointer'><Link to='/vendors'>Weeding</Link></li>
                            <li className='hover:text-blue-500 cursor-pointer'><Link to='/photos'>Birthday</Link></li>
                            <li className='hover:text-blue-500 cursor-pointer'><Link to='/e-invite'>Conference</Link></li>
                            <li className='hover:text-blue-500 cursor-pointer'><Link to='/about'>0nline Event</Link></li>
                    </ul>
            </div> */}
            <div className='m-20'>
                <h2 className='text-4xl font-bold mb-6'>Getting Started</h2>
                <ul className="flex gap-6 text-gray-700 font-medium text-lg">
                    <li
                        className={`cursor-pointer hover:text-blue-500 ${selectedCategory === 'business' ? 'text-blue-600 font-bold' : ''}`}
                        onClick={() => setSelectedCategory('business')}
                        >
                         Business Event
                    </li>
                </ul> 
            </div> 


            <div className="px-10">
                {selectedCategory === 'business' && <BusinessEventCards />}
            </div>    
        </>
       

    )
}

export default Home