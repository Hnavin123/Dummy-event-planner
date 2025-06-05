import React from 'react'

const Footer = () => {
    return(
        <>
            <div className='w-full h-[500px] bg-gray-800 text-white flex items-center justify-center'>
                
                {/* <p className='text-lg font-light'>© 2023 VenueFinder. All rights reserved.</p> */}
                <div className='w-[1000px] h-[250px] bg-violet-300 rounded-xl mb-28'>
                    <div className='mt-8 flex flex-col items-center justify-center'> 
                        <p className="font-extrabold text-4xl text-black mb-4">Get Discount Instantly</p>

                        <div className="flex items-center justify-center text-center max-w-xl mx-auto">
                        To save, you just have to log in to your account and look for the experiences.
                        On your first reservation, you can enjoy a 10% discount.

                        <form className="flex-col bg-white rounded-full shadow-lg overflow-hidden ">
                        <input type="text" placeholder="Enter your Email" className="flex-grow px-2 py-2 text-gray-700 outline-none"/>
                        <button
                            type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-20 py-13 rounded-r-full">
                            Search
                        </button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[100px] bg-gray-700 text-white flex items-center justify-center'>
                <p className='text-sm font-light'>Follow us on social media</p>
            </div>
        </>
    )
}

export default Footer