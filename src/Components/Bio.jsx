import React from "react";
import Heroimage from "../assets/gafarpictures2025.webp";

function Bio() {
  // File picker handler function
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="bg-black text-white text-center py-16">
      {/* Hero image */}
      <img
        src={Heroimage}
        alt="Suleiman Gafar"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
      transition-transform duration-300 hover:scale-105"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold">
        I am{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Suleiman Gafar
        </span>
        , Front-end Developer
      </h1>

      {/* Bio text */}
      <p className="mt-4 text-lg text-gray-300">
        I specialise in building advanced and responsive web applications.
      </p>

      {/* Buttons */}
      <div className="mt-8 space-x-4">
        {/* Contact Button */}
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact with me
        </button>

        {/* Upload File Button */}
        <button
          onClick={() => document.getElementById("fileInput").click()}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button>

        {/* Hidden file input */}
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default Bio;
