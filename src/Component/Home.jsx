import React from "react";
import img from "../assets/imag2.jpg";
import img2 from "../assets/image4.avif";
import img3 from "../assets/imag3.webp";
import img4 from "../assets/imag1.jpg";

function Home() {
  return (
    <div className="bg-gray-50 flex flex-col items-center py-12 px-6">
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          {/* Left Images */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <img
              src={img}
              alt=""
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src={img2}
              alt=""
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
          </div>

          {/* Text Section */}
          <div className="md:col-span-3 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Trusted Professionals Near You in Just a Click! Hello From me
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Find high-quality talent or open jobs with the help of a website
              that keeps you in control.
            </p>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-md transition">
              “Hire a Talent and Take Services”
            </button>
          </div>

          {/* Right Images */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <img
              src={img3}
              alt=""
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src={img4}
              alt=""
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
