import React from "react";
const About = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#dac7e6] to-[#ffffff]">
        {/* Text Section */}
        <div className="w-full flex flex-col items-center mb-10 px-4">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Make Your Event Idea Come True
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl text-center">
            Welcome to our Event Planning website! We are dedicated to making
            your events unforgettable. From weddings to corporate gatherings,
            our team of experts is here to help you every step of the way.
          </p>
        </div>

        {/* Two Side-by-Side Boxes */}
        <div className="w-full flex justify-center gap-6 px-6">
          <div className="w-1/2 h-[500px] bg-white rounded-lg shadow-lg flex items-center justify-center">
            <div className="flex flex-col p-4">
              <p className="text-xl text-gray-600 ">
                At Event Planner, we turn your dreams into reality with seamless
                event planning and execution. As a leading event management
                company in Kolkata, we specialize in creating unforgettable
                experiences, whether it’s a corporate event, wedding, concert,
                or private celebration. With a team of experts and a passion for
                perfection, we offer top-tier services, including event
                decorations, special effects, light & sound, entertainment,
                hospitality, manpower, l ogistics, and hampers. From concept to
                completion, we handle every detail, ensuring your event is
                flawless and memorable
              </p>
              <div className="mt-4 flex flex-col ">
                <a
                  href="/your-target-page"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200"
                >
                  Experienced & creative event planners
                </a>
                <a
                  href="/your-target-page"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200"
                >
                  Custom event solutions tailored to your needs
                </a>
                <a
                  href="/your-target-page"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200"
                >
                  High-quality equipment & professional execution
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[500px] bg-white rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="https://jaiswalevents.in/wp-content/uploads/2025/02/group-of-friends-enjoying-party-throwing-confetti-C7NJQTG.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      

      <div className="flex flex-col w-full h-[300px] bg-purple-800 items-center justify-center mt-10">
        <p className="text-yellow-500 text-lg font-semibold">Why Choose Us !</p>
        <div className="items-center justify-center ml-10">
          <p className="text-white text-5xl">
            Very Responsible With Your Event
          </p>
          <p className="text-white">
            {" "}
            At Jaiswal Events, we bring creativity, expertise, and precision to
            every occasion, making us the most trusted event management company
            in Kolkata. With years of experience, we specialize in designing
            unique and memorable events, whether it’s a wedding, corporate
            gathering, or private celebration. Our end-to-end event management
            covers everything from venue selection and decorations to logistics
            and entertainment, ensuring a hassle-free experience for our
            clients. We pride ourselves on delivering high-quality services,
            innovative concepts, and flawless execution with the help of our
            professional and friendly team. Committed to excellence, we turn
            your vision into reality, creating unforgettable moments with
            perfection in every detail.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
