import { useState } from "react";

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const platforms = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  };

  const handleOptionClick = (platform) => {
    window.open(platforms[platform], "_blank"); // Open the selected platform
    setShowOptions(false); // Hide the dropdown after selection
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Gafar</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contacts</a>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowOptions((prev) => !prev)}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Connect Me
          </button>

          {/* Dropdown Options */}
          {showOptions && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg">
              {Object.keys(platforms).map((platform) => (
                <div
                  key={platform}
                  onClick={() => handleOptionClick(platform)}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
