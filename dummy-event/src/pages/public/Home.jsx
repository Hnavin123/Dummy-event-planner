import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BusinessEventCards from "../../components/EventCards/BusinessEventCards";
import './Home.css';


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
      {/* <div className="">
        <img src="https://cdn.eventplanner.net/imgs/adv-2772/46212-hp-sb-desktop-event-lounge@2x.jpg" alt="" />
        
        <div className="">
          <h2 className="text-blue-50 text-[30px] mb-2">
            Find <span className="font-bold">best event planner</span> and
            <span className="font-bold"> event venues</span>
          </h2>
          <form className="flex bg-white rounded-full shadow-lg overflow-hidden ">
            <input
              type="text"
              placeholder="Search events, venues, vendors..."
              className="flex-grow px-4 py-3 text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-full"
            >
              Search
            </button>
          </form>
        </div>
      </div>


      <div className="mt-20 ml-20">
        <h2 className="text-4xl font-bold mb-6">Getting Started</h2>
        <ul className="flex gap-6 text-gray-700 font-medium text-lg">
          <li
            className={`cursor-pointer hover:text-blue-500 ${
              selectedCategory === "business" ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => setSelectedCategory("business")}
          >
            Business Event
          </li>
          <li
            className={`cursor-pointer hover:text-blue-500 ${
              selectedCategory === "conference" ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => setSelectedCategory("conference")}
          >
            {" "}
            Conference
          </li>

          <li
            className={`cursor-pointer hover:text-blue-500 ${
              selectedCategory === "weeding" ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => setSelectedCategory("weeding")}
          >
            {" "}
            Weeding
          </li>

          <li
            className={`cursor-pointer hover:text-blue-500 ${
              selectedCategory === "birthday" ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => setSelectedCategory("birthday")}
          >
            {" "}
            Birthday
          </li>
          <li
            className={`cursor-pointer hover:text-blue-500 ${
              selectedCategory === "others" ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => setSelectedCategory("others")}
          >
            Others
          </li>
        </ul>
      </div>

      <div className="px-10">
        {selectedCategory === "business" && <BusinessEventCards />}
      </div>

      <div className=" border-#e9e9ed mt-[32px] h-[620px] border-t-[1px] border-b-[2px]">
        <h2 className="mt-[55px] text-4xl font-bold mb-6 ml-20">
          Popular Cities
        </h2>
        <div className="ml-20 flex gap-8 flex-wrap px-10 py-5">
          <div className="h-[411px] w-[380px] border-[1px] shadow-md">
            <div className="h-[250px] w-full border-[1px]">
              <img
                src="https://cdn.eventplanner.net/imgs/city-BE1000/hpBE1000-mobile-brussel@2x.jpg"
                alt=""
              />
              <div className="m-5  border-[0px]">
                <h3>Mumbai</h3>
                <li>Bnaquet Hall in Mumbai</li>
                <li>Wedding Venues in Mumbai</li>
                <li>Conference Venues in Mumbai</li>
              </div>
            </div>
          </div>
          <div className="h-[411px] w-[380px] border-[1px]  shadow-md">
            <div className="h-[250px] w-full border-[1px] ">
              <img
                src="https://cdn.eventplanner.net/imgs/city-GBec1a/hpGBec1a-mobile-london@2x.jpg"
                alt=""
              />
              <div className="m-5  border-[0px] ">
                <h3>Mumbai</h3>
                <li>Bnaquet Hall in Mumbai</li>
                <li>Wedding Venues in Mumbai</li>
                <li>Conference Venues in Mumbai</li>
              </div>
            </div>
          </div>
          <div className="h-[411px] w-[380px] border-[1px] shadow-md">
            <div className="h-[250px] w-full border-[1px] ">
              <img
                src="https://cdn.eventplanner.net/imgs/city-NL1000/hpNL1000-mobile-amsterdam@2x.jpg"
                alt=""
              />
              <div className="m-5  border-[0px]">
                <h3>Mumbai</h3>
                <li>Bnaquet Hall in Mumbai</li>
                <li>Wedding Venues in Mumbai</li>
                <li>Conference Venues in Mumbai</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 ">
        <div>
          <h2 className="mt-[55px] text-4xl font-bold mb-6 ml-20">
            Inspiring Event Suppliers
          </h2>
          <div className="ml-20 flex gap-8 flex-wrap px-10 py-5">
            <div className="h-[411px] w-[380px] border-[1px] shadow-md">
              <div className="h-[250px] w-full border-[1px]">
                <img
                  src="https://cdn.eventplanner.net/imgs/adv-6751/13429-hp-mobile-sportspreker@2x.jpg"
                  alt=""
                />
                <div className="m-5  border-[0px]">
                  <h3 className="font-bold ">SportSpeaker</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis id nisi nihil doloribus officiis molestiae.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[411px] w-[380px] border-[1px]  shadow-md">
              <div className="h-[250px] w-full border-[1px] ">
                <img
                  src="https://cdn.eventplanner.net/imgs/adv-1882/61767-hp-mobile-grouppda-nv@2x.jpg"
                  alt=""
                />
                <div className="m-5  border-[0px] ">
                  <h3 className="font-bold"> Group-PDA nv</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis id nisi nihil doloribus officiis molestiae.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[411px] w-[380px] border-[1px] shadow-md">
              <div className="h-[250px] w-full border-[1px] ">
                <img
                  src="https://cdn.eventplanner.net/imgs/adv-7712/73201-hp-mobile-daft-boutique-music-hotel@2x.jpg"
                  alt=""
                />
                <div className="m-5  border-[0px]">
                  <h3 className="font-bold"> Daft Botique & Music Hotel</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis id nisi nihil doloribus officiis molestiae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <section className="header-image image1">
        <div className="ptext">
          <div className="textBg">Find best event planner and event venues
                <form class="search-form"><input type="text" placeholder="Search events, venues, vendors..." class="search-input"/>
                  <button type="submit" class="search-button">Search</button>
                </form>
          </div>
        </div>
      </section>
      
      <div className="mt-20 ml-20">
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
    </div>

    </>
  );
};

export default Home;
