import React from "react";
import Heroimage from "../assets/gafarpictures2025.webp";
import ScrollReveal from "../Components/ScrollReveal"; // adjust path if needed

function Bio() {
  const handleResumeDownload = () => {
    alert('Resume download will be available soon!');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="bg-black text-white text-center py-16">
      <ScrollReveal direction="up" delay={0.1}>
        <img
          src={Heroimage}
          alt="Suleiman Gafar"
          className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
          transition-transform duration-300 hover:scale-105"
        />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.2}>
        <h1 className="text-4xl font-bold">
          I am{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Suleiman Gafar
          </span>
          , Front-end Developer
        </h1>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.3}>
        <p className="mt-4 text-lg text-gray-300">
          I specialise in building advanced and responsive web applications.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.4}>
        <div className="mt-8 space-x-4">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Contact with me
          </button>

          <button
            onClick={handleResumeDownload}
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Resume
          </button>

          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </ScrollReveal>
    </div>
  );
}

export default Bio;
