import { useState, useEffect } from "react";
import ScrollReveal from "../Components/ScrollReveal"; // Adjust path as needed

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const platforms = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  };

  const handleOptionClick = (platform) => {
    window.open(platforms[platform], "_blank");
    setShowOptions(false);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-4 flex justify-between items-center">

        {/* Brand */}
        <ScrollReveal direction="down">
          <div className="text-2xl font-bold">Gafar</div>
        </ScrollReveal>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ScrollReveal direction="down" delay={0.1} className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contacts</a>
        </ScrollReveal>

        {/* Desktop Connect Me Dropdown */}
        <div className="relative hidden md:inline dropdown">
          <ScrollReveal direction="down" delay={0.2}>
            <button
              onClick={() => setShowOptions((prev) => !prev)}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            >
              Connect Me
            </button>
          </ScrollReveal>

          {showOptions && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg z-50">
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

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className="md:hidden mt-4 space-y-4 dropdown">
          <a href="#home" className="block hover:text-gray-400">Home</a>
          <a href="#about" className="block hover:text-gray-400">About Me</a>
          <a href="#service" className="block hover:text-gray-400">Services</a>
          <a href="#projects" className="block hover:text-gray-400">Projects</a>
          <a href="#contact" className="block hover:text-gray-400">Contacts</a>
          <div className="relative">
            <button
              onClick={() => setShowOptions((prev) => !prev)}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            >
              Connect Me
            </button>

            {showOptions && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg z-50">
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
      )}
    </nav>
  );
}

export default Navbar;
