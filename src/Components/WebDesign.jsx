import React, { useEffect } from "react";
import ScrollReveal from "../Components/ScrollReveal";

const WebDesign = () => {
  useEffect(() => {
    ScrollReveal().reveal(".web-title", {
      duration: 1000,
      origin: "top",
      distance: "50px",
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".web-section", {
      duration: 1000,
      origin: "bottom",
      distance: "30px",
      easing: "ease-in-out",
      interval: 200,
      reset: false,
    });

    ScrollReveal().reveal(".web-cta", {
      duration: 1000,
      scale: 0.85,
      easing: "ease-in-out",
      delay: 600,
      reset: false,
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-12 web-title">
          Web Design
        </h1>

        <section className="mb-8 web-section">
          <p className="text-lg text-gray-300 leading-7">
            Welcome to our Web Design services page! At{" "}
            <span className="text-white font-semibold">[Your Company]</span>, we
            specialize in creating visually appealing, user-friendly, and
            responsive websites. Our design philosophy centers on delivering
            exceptional user experiences while helping you achieve business
            goals.
          </p>
        </section>

        <section className="mb-8 web-section">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-300 leading-7">
            <li>Modern, responsive web layouts</li>
            <li>UX/UI strategy and wireframing</li>
            <li>Design systems and brand consistency</li>
            <li>Mobile-first and cross-browser compatibility</li>
          </ul>
        </section>

        <section className="mb-12 web-section">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-gray-300 leading-7">
            Our team of experts ensures that your website not only looks great
            but also performs effectively. We align our creative process with
            your vision and brand identity, ensuring maximum user engagement.
          </p>
        </section>

        <div className="text-center web-cta">
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
