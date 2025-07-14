import ScrollReveal from "../Components/ScrollReveal"; // Adjust the path if necessary

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    link: "https://www.google.com/search?q=web+design", 
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    link: "https://www.google.com/search?q=frontend+development", 
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    link: "https://www.google.com/search?q=backend+development", 
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    link: "https://www.google.com/search?q=full-stack+development", 
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
    link: "https://www.google.com/search?q=content+writing", 
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
    link: "https://www.google.com/search?q=digital+marketing", 
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={index * 0.15}
              className="h-full"
            >
              <div className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                  {service.id}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-300">{service.description}</p>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
                >
                  Read More
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
