import React from 'react'

const Footer = () => {
    return(
        <>
            <div className="w-full h-[500px] bg-gray-800 text-white flex items-center justify-center pb-52">
                 <div className="w-[1000px] h-[200px] bg-violet-300 rounded-xl p-8 relative ">
                    <div className="flex flex-col items-center text-center">
                        <p className="font-extrabold text-4xl text-black mb-4">Get Discount Instantly</p>

                        <p className="text-black max-w-xl mb-4">
                            To save, you just have to log in to your account and look for the experiences.
                            On your first reservation, you can enjoy a 10% discount.
                        </p>

                        <form className="bg-white rounded-full shadow-lg overflow-hidden w-[350px] flex mt-2">
                            <input
                                type="text"
                                placeholder="Enter your Email"
                                className="flex-grow px-4 py-1 text-gray-700 outline-none text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-sm rounded-r-full">Search
                            </button>
                        </form>
                    </div>
                </div>
                
                
                
            </div>


            

            <div className="w-full h-[100px] bg-gray-700 text-white flex items-center justify-center">
            <p className="text-sm font-light">Follow us on social media</p>
            </div>

        </>
    )
}

export default Footer