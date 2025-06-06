import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='w-full relative'>
                <img 
                    src="https://jaiswalevents.in/wp-content/uploads/2025/02/empty-stage-concert-with-lighting-laser-beam-spotl-H34S9C7.jpg" 
                    alt="Event" 
                    className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className='font-medium text-white text-8xl'>Contact</span>
                </div>
            </div>

            <div className="h-[1200px] w-full bg-black flex justify-center items-start">
                <div className="grid grid-cols-4 gap-[15px] bg-green-400 p-[20px] mt-[20px]">
                    {/* Contact Form */}
                    <div className="col-span-4 md:col-span-2 bg-white p-[20px] rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <form>
                            <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border border-gray-300 rounded" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border border-gray-300 rounded" />
                            <textarea placeholder="Your Message" className="w-full p-3 mb-4 border border-gray-300 rounded h-[150px]" />
                            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="col-span-4 md:col-span-2 bg-white p-[20px] rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Contact Details</h2>
                        <p><strong>Email:</strong></p>
                    </div>
                </div>
            </div>      
        </>
    )
}

export default Contact