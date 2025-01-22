import Heroimage from "../assets/gafarpictures2025.webp";

function Bio() {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={Heroimage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
      transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I am{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Suleiman Gafar
        </span>
        , Front-end Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialise in building advanced and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact with me
        </button>
        <a
          href="/path-to-resume/my-resume.pdf" // Replace with the actual path to your resume
          download="Suleiman-Gafar-Resume.pdf" // This specifies the filename to save as
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Bio;
