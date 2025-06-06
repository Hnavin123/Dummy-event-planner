import React from 'react'

const 
About = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#dac7e6] to-[#ffffff]'>

  {/* Text Section */}
  <div className='w-full flex flex-col items-center mb-10 px-4'>
    <h1 className='text-4xl font-bold text-purple-800 mb-4'>Make Your Event Idea Come True</h1>
    <p className='text-lg text-gray-700 max-w-2xl text-center'>
      Welcome to our Event Planning website! We are dedicated to making your events unforgettable. 
      From weddings to corporate gatherings, our team of experts is here to help you every step of the way.
    </p>
  </div>

  {/* Two Side-by-Side Boxes */}
  <div className="w-full flex justify-center gap-6 px-6">
    <div className="w-1/2 h-[500px] bg-white rounded-lg shadow-lg flex items-center justify-center">
            <div className='flex flex-col p-4'>
                <p className="text-xl text-gray-600 ">At Event Planner, we turn your dreams into reality with seamless event planning and execution. 
                As a leading event management company in Kolkata, we specialize in creating unforgettable experiences, 
                whether it’s a corporate event, wedding, concert, or private celebration.
                With a team of experts and a passion for perfection, we offer top-tier services, 
                including event decorations, special effects, light & sound, entertainment, hospitality, manpower, l
                ogistics, and hampers. From concept to completion, we handle every detail, ensuring your 
                event is flawless and memorable</p>
                <div className='mt-4 flex flex-col '>
                    <a href="/your-target-page" className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200">
                    Experienced & creative event planners 
                    </a>
                    <a href="/your-target-page" className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200">
                        Custom event solutions tailored to your needs 
                    </a>
                    <a href="/your-target-page" className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200">
                    High-quality equipment & professional execution
                    </a>
                    
                </div>
            </div>
        </div>
        <div className="w-1/2 h-[500px] bg-white rounded-lg shadow-lg flex items-center justify-center">
        <img src="https://jaiswalevents.in/wp-content/uploads/2025/02/group-of-friends-enjoying-party-throwing-confetti-C7NJQTG.jpg" alt="" 
            className='w-full h-full'/>
        
        </div>
  </div>

        <div className='w-full h-[400px] bg-pink-500 flex items-center justify-center'>
            <p>Hello</p>
        </div>

</div>

            

    )
}

export default About