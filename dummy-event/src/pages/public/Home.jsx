import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BusinessEventCards from "../../components/EventCards/BusinessEventCards";
import './Home.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("business");
    const categories = [
    { id: "business", label: "Business Event" },
    { id: "conference", label: "Conference" },
    { id: "weeding", label: "Weeding" },
    { id: "birthday", label: "Birthday" },
    { id: "others", label: "Others" },
  ];
  return (
   <>
        <section className="header-image image1">
          <div className="ptext">
            <div className="textBg">Find best event planner and event venues
                  <form class="search-form"><input type="text" placeholder="Search events, venues, vendors..." class="search-input"/>
                    <button type="submit" class="search-button">Search</button>
                  </form>
            </div>
          </div>
        </section>
      
        <section className="features-section">
          <div className="features-container">
            <div className="feature-box">
              <h3>FRIENDLY TEAM</h3>
              <p>Our experienced and enthusiastic team is always ready to make your event unforgettable.</p>
            </div>
            <div className="feature-box">
              <h3>BEST VENUES</h3>
              <p>We offer a wide range of top-rated venues that suit every occasion and budget.</p>
            </div>
            <div className="feature-box">
              <h3>AWESOME EVENT</h3>
              <p>From planning to execution, we create memorable and seamless event experiences.</p>
            </div>
          </div>
        </section>



        <section className="info-section">
          <div className="info-container">
            <div className="info-text">
              <span>ABOUT jaiswalevents</span>
              <h2>Make Your Event Idea Come True</h2>
              <p>
                At Jaiswal Events, we turn your dreams into reality with seamless event planning and execution. As a leading event management company in Kolkata, we specialize in creating unforgettable experiences, whether it’s a corporate event, wedding, concert, or private celebration.
                With a team of experts and a passion for perfection, we offer top-tier services, including event decorations, special effects, light & sound, entertainment, hospitality, manpower, logistics, and hampers. From concept to completion, we handle every detail, ensuring your event is flawless and memorable.
              </p>
            </div>
            <div className="info-image">
              <img
                src="https://jaiswalevents.in/wp-content/uploads/2025/02/business-people-party-celebration-success-concept-XGXN6PU.jpg"
                alt="Event Planning"
              />
            </div>
          </div>
        </section>




        <section className="services-section">
          <h2 className="services-title">EVENT SERVICES WE PROVIDE</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Birthday Party</h3>
              <p>Celebrate your special day with fun themes, cakes, and unforgettable memories.</p>
            </div>
            <div className="service-card">
              <h3>Corporate Event</h3>
              <p>Professional setup for conferences, launches, and team-building activities.</p>
            </div>
            <div className="service-card">
              <h3>Wedding Planner</h3>
              <p>Plan your dream wedding with perfect decor, venues, and arrangements.</p>
            </div>
            <div className="service-card">
              <h3>Anniversary</h3>
              <p>Re-live your love story with an elegant and intimate celebration.</p>
            </div>
            <div className="service-card">
              <h3>Private Party</h3>
              <p>Exclusive party setups tailored to your style, budget, and guest list.</p>
            </div>
            <div className="service-card">
              <h3>Masquerade Party</h3>
              <p>Add a touch of mystery and elegance to your evening with masked glamour.</p>
            </div>
          </div>
        </section>





        <section className="choose-us-section">
          <div className="choose-us-container">
            <div className="choose-us-images">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
                alt="Team Working"
              />
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Event Planning"
              />
            </div>
            <div className="choose-us-text">
              <h2>WHY CHOOSE US</h2>
              <span>Very Responsible With Your Event</span>
              <p>
                At Jaiswal Events, we bring creativity, expertise, and precision to every occasion, making us the most trusted event management company in Kolkata. With years of experience, we specialize in designing unique and memorable events, whether it’s a wedding, corporate gathering, or private celebration. Our end-to-end event management covers everything from venue selection and decorations to logistics and entertainment, ensuring a hassle-free experience for our clients. We pride ourselves on delivering high-quality services, innovative concepts, and flawless execution with the help of our professional and friendly team. Committed to excellence, we turn your vision into reality, creating unforgettable moments with perfection in every detail.
              </p>
            </div>
          </div>
        </section>





        {/* <div className="mt-20 ml-20">
          <h2 className="text-4xl font-bold mb-6">Getting Started</h2>
          <ul className="flex gap-6 text-gray-700 font-medium text-lg">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  className={`cursor-pointer hover:text-blue-500 ${
                    selectedCategory === cat.id ? "text-blue-600 font-bold" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </li>
              ))}
          </ul>
        </div> */}
      
  </>
  );
};

export default Home;
