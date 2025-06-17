// 

import React from 'react';
import './Venue.css';

const Venue = () => {
  return (
    <>
      <section className="venue-header">
        <h2>Find Meeting Venues, Request Quotes, and Book Event Space</h2>
        <p>No commission, no charges, no fees.</p>
      </section>

      <div className="venue-hero-section">
            <img src="https://images.cvent.com/44141df3992b4064b5f7a48295c5d70d/destinationguide/images/homepage/heroimages/b35347c0.usaregion.jpg?d=1600&f=webp&unique=true" alt="venue"
                className="venue-bg-image"
            />

            <div className="venue-overlay-box">
                <h3>Explore your desired Venue!</h3>
                <p>Find the perfect location for your event.</p>
                <div className="venue-search">
                    <input type="text" placeholder="Search venue or places in your city"/>
                    <button>Explore</button>
                </div>
            </div>
     </div>


      <section className="venue-cards-container">
        <h2>Popular Venues In Your City</h2>
        <div className="venue-cards">
          <div className="venue-card">
            <img src="https://www.cvent.com/meeting-event-planning/_next/image?url=https%3A%2F%2Fimages.cvent.com%2FCSN%2F8f0eca0e-cfdc-4bb6-b79a-b4faac1f5352%2Fimages%2F5387de4eebdd43ea947676e6904b20db_LARGE!_!09e4cf531922daee68168cbe773b4be3.jpg%3Fd%3D720&w=640&q=75" alt="Auris Kolkata" />
            <div className="venue-card-content">
              <h4>Auris Kolkata</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id nisi nihil doloribus officiis molestiae.</p>
              <div className="venue-details">
                <h5 className='text-purple-700 font-bold'>Venue Details</h5>
                <ul>
                  <li>Capacity: 1000</li>
                  <li>Location: Kolkata</li>
                  <li>Type: Banquet Hall</li>
                  <li>Price: $5000</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="venue-card">
                <img src="https://www.cvent.com/meeting-event-planning/_next/image?url=https%3A%2F%2Fimages.cvent.com%2FCSN%2Fb04828c6-e0c7-4044-9561-3f980d13292e%2Fimages%2F3d88fe1f11c74d7196edd005c4f1a98e!_!f77a14f4bed97422462843cfaea81837.jpg%3Fd%3D720&w=640&q=75" alt="Group-PDA nv" />
                <div className="venue-card-content">
                    <h4>Group-PDA nv</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id nisi nihil doloribus officiis molestiae.</p>
                    <div className="venue-details">
                        <h5 className='text-purple-700 font-bold'>Venue Details</h5>
                        <ul>
                        <li>Capacity: 1000</li>
                        <li>Location: Kolkata</li>
                        <li>Type: Banquet Hall</li>
                        <li>Price: $5000</li>
                        </ul>
                    </div>
                </div>
          </div>

          <div className="venue-card">
            <img src="https://www.cvent.com/sites/default/files/image/2025-03/800x450-2.jpg" alt="Daft Botique & Music Hotel" />
            <div className="venue-card-content">
              <h4>Daft Botique & Music Hotel</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id nisi nihil doloribus officiis molestiae.</p>
                <div className="venue-details">
                    <h5 className='text-purple-700 font-bold'>Venue Details</h5>
                    <ul>
                    <li>Capacity: 1000</li>
                    <li>Location: Kolkata</li>
                    <li>Type: Banquet Hall</li>
                    <li>Price: $5000</li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Venue;