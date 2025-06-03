import React from 'react'

const Venue = () => {
    return (
        <>
            <div className='w-full h-[200px] bg-white border'>
                    <div className="w-full h-[200px] bg-gray-100 text-center pt-10">
                        <p className="text-3xl font-medium">Find Meeting Venues, Request Quotes, and Book Event Space</p>
                        <p className='mt-1 font-thin'>No commission, no charges, no fees.</p>
                    </div>
                    
            </div>

            <div className='w-full h-max flex items-center justify-center'>
                <img src="https://images.cvent.com/44141df3992b4064b5f7a48295c5d70d/destinationguide/images/homepage/heroimages/b35347c0.usaregion.jpg?d=1600&f=webp&unique=true" alt="" />
            
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full max-w-xl px-0 ">
                    <div className='h-[250px] w-[600px] bg-white border'>
                            <div className="w-full h-[120px] bg-gray-100 ">
                                <p className=" text-center pt-10 text-4xl font-medium">Explore your desired Venue!</p>
                                <p className='pl-20 pt-2 font-normal'>Find the perfect location for your event.</p>
                            </div>

                            <div className='pl-20 pt-3'>
                                <p className='font-thin text-sm'>where?</p>
                                <input type="text"placeholder="Search venue or places in your city"
                                className=" w-80 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                                <button className="ml-8 bg-blue-500 text-white px-4 py-2 rounded">Explore</button>

                            </div>
                    </div>

                </div>
            </div>

            <div className='w-full h-screen m-5 pt-10 flex '>
                <div className='ml-20'><h2 className='text-4xl font-bold'>Popular Venue In your City</h2>
                    <div className=' flex gap-8 flex-wrap py-5 mt-5'>
                        <div className='h-[511px] w-[380px] border-[1px] shadow-md '>
                            <div className='h-[200px] w-full border-[1px]'>
                                <img src="https://www.cvent.com/meeting-event-planning/_next/image?url=https%3A%2F%2Fimages.cvent.com%2FCSN%2F8f0eca0e-cfdc-4bb6-b79a-b4faac1f5352%2Fimages%2F5387de4eebdd43ea947676e6904b20db_LARGE!_!09e4cf531922daee68168cbe773b4be3.jpg%3Fd%3D720&w=640&q=75" alt="" />
                                <div className='m-5  border-[0px]'>
                                    <h3 className='font-bold '>Auris Kolkata</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id nisi nihil doloribus officiis molestiae.</p>
                                </div>
                                <div className='m-5'>
                                    <div className=''>
                                        <h3 className='font-bold text-purple-700' > Venue Details</h3>
                                        <ul className='list-disc ml-5'>
                                            <li>Capacity: 1000</li>
                                            <li>Location: Kolkata</li>
                                            <li>Type: Banquet Hall</li>
                                            <li>Price: $5000</li>
                                        </ul>
                                    </div>
                                    {/* <div className="absolute bottom-10 ">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded 
                                        transition duration-300 ">+ Select Venue</button>
                                    </div> */}
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div className='h-[511px] w-[380px] border-[1px]  shadow-md'>
                            <div className='h-[200px] w-full border-[1px] '>
                                <img src="https://www.cvent.com/meeting-event-planning/_next/image?url=https%3A%2F%2Fimages.cvent.com%2FCSN%2Fb04828c6-e0c7-4044-9561-3f980d13292e%2Fimages%2F3d88fe1f11c74d7196edd005c4f1a98e!_!f77a14f4bed97422462843cfaea81837.jpg%3Fd%3D720&w=640&q=75" alt="" />
                                <div className='m-5  border-[0px] '>
                                <h3 className='font-bold'> Group-PDA nv</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id nisi nihil doloribus officiis molestiae.</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-[511px] w-[380px] border-[1px] shadow-md'>
                            <div className='h-[200px] w-full border-[1px] '>
                                <img src="https://www.cvent.com/sites/default/files/image/2025-03/800x450-2.jpg" alt="" />
                                <div className='m-5  border-[0px]'>
                                    <h3 className='font-bold'> Daft Botique & Music Hotel</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id nisi nihil doloribus officiis molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        
}

export default Venue
