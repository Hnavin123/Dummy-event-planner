import React from 'react'

const Photo = () => {
    return (
        <>
         <div className='w-full relative'>
            <img 
                src="https://jaiswalevents.in/wp-content/uploads/2025/02/empty-stage-concert-with-lighting-laser-beam-spotl-H34S9C7.jpg" 
                alt="Event" 
                className="w-full h-[400px] object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center">
                    <span className='font-medium text-white  text-8xl'>Gallery</span>
            </div>
        </div>

         <div className="h-[1200px] w-full bg-black flex justify-center items-start">
            <div className="grid grid-cols-4 gap-[15px] bg-green-400 p-[20px] mt-[20px]">
                {/* Box 1 */}
                <div className="h-[400px] w-[320px] bg-white overflow-hidden">
                <img 
                    src="https://jaiswalevents.in/wp-content/uploads/2025/02/jaiswalevents-9-scaled.jpg" 
                    alt="Image 1" 
                    className="h-full w-full object-cover" 
                />
                </div>

                 {/* Box 2 */}
                <div className="h-[400px] w-[320px] bg-white overflow-hidden">
                <img 
                    src="https://via.placeholder.com/250x300" 
                    alt="Image 2" 
                    className="h-full w-full object-cover" 
                />
                </div>

                    {/* Box 3 */}
                    <div className="h-[400px] w-[320px] bg-white overflow-hidden">
                    <img 
                        src="https://via.placeholder.com/220x300" 
                        alt="Image 3" 
                        className="h-full w-full object-cover" 
                    />
                    </div>
                {/* Box 4 */}
                <div className="h-[400px] w-[320px] bg-white overflow-hidden">
                <img 
                    src="https://via.placeholder.com/240x300" 
                    alt="Image 4" 
                    className="h-full w-full object-cover"
                />
                </div>
                <div className="h-[400px] w-[320px] bg-white overflow-hidden">
                <img 
                    src="https://via.placeholder.com/240x300" 
                    alt="Image 4" 
                    className="h-full w-full object-cover"
                />
                </div>
                <div className="h-[400px] w-[320px] bg-white overflow-hidden">
                <img 
                    src="https://via.placeholder.com/240x300" 
                    alt="Image 4" 
                    className="h-full w-full object-cover"
                />
                </div>
                <div className="h-[400px] w-[320px] bg-white overflow-hidden">
                <img 
                    src="https://via.placeholder.com/240x300" 
                    alt="Image 4" 
                    className="h-full w-full object-cover"
                />
                </div>
                <div className="h-[400px] w-[320px] bg-white overflow-hidden">
                <img 
                    src="https://via.placeholder.com/240x300" 
                    alt="Image 4" 
                    className="h-full w-full object-cover"
                />
                </div>
            </div>        
            
        </div>

            
        </>
    )
}

export default Photo