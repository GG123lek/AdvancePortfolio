import { useState } from "react";

function Navbar() {
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const platforms = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  };

  const handleConnect = () => {
    if (selectedPlatform && platforms[selectedPlatform]) {
      window.open(platforms[selectedPlatform], "_blank");
    } else {
      alert("Please select a platform to connect!");
    }
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
        <div className="hidden md:flex items-center space-x-4">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-2 rounded bg-gray-800 text-white"
          >
            <option value="" disabled>
              Select Platform
            </option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
          </select>
          <button
            onClick={handleConnect}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Connect Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
