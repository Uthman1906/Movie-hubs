import React, { useState, useEffect } from 'react';

export default function App() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [currentSlide, setCurrentSlide] = useState(0);
const [isScrolling, setIsScrolling] = useState(false);

// Google Drive image URLs
const heroImageURL = "https://drive.google.com/uc?id=15TiCOS8K-En10VL5hBWA82xbHRhYnUik"; // Hero & factory image
const peopleImageURL = " https://drive.google.com/uc?id=15TiCOS8K-En10VL5hBWA82xbHRhYnUik"; // People drinking yogurt
const productImageURL = " https://drive.google.com/uc?id=15SyqlQpQ0N5goEkHrRZem5STcUrmb6qZ"; // Product images

// Contact info
const phoneNumber = "08147952500";
const email = "isholauthman1995@gmail.com";
const address = "13, Market Street, off Capitol Bus Stop, Lagos";

// Mock product data
const products = [
{
id: 1,
name: "Strawberry Yogurt",
description: "Made with fresh strawberries and creamy yogurt.",
price: "₦1,200",
image: "https://drive.google.com/file/d/15Vk5nJfC6_08V9gQTTIVchHnDJyK7Pp9/view?usp=drivesdk"
},
{
id: 2,
name: "Vanilla Yogurt",
description: "Classic vanilla flavor with a smooth and creamy texture.",
price: "₦1,000",
image: "https://drive.google.com/file/d/15Vk5nJfC6_08V9gQTTIVchHnDJyK7Pp9/view?usp=drivesdk"
},
{
id: 3,
name: "Chocolate Smoothie",
description: "Rich chocolate flavor blended with creamy yogurt.",
price: "₦1,500",
image: "https://drive.google.com/file/d/15Vk5nJfC6_08V9gQTTIVchHnDJyK7Pp9/view?usp=drivesdk"
},
{
id: 4,
name: "Mango Yogurt",
description: "Tropical mango flavor that's both sweet and refreshing.",
price: "₦1,300",
image: "https://drive.google.com/file/d/15Vk5nJfC6_08V9gQTTIVchHnDJyK7Pp9/view?usp=drivesdk"
}
];

// Carousel data
const carouselItems = [
{
image: productImageURL,
title: "Variety Pack",
price: "Starting from ₦1,000"
},
{
image: "https://drive.google.com/file/d/15Vk5nJfC6_08V9gQTTIVchHnDJyK7Pp9/view?usp=drivesdk",
title: "Flavor Collection",
price: "Starting from ₦1,200"
}
];

// Handle scroll animation
useEffect(() => {
const handleScroll = () => {
setIsScrolling(true);
clearTimeout(window.scrollEndTimer);
window.scrollEndTimer = setTimeout(() => {
setIsScrolling(false);
}, 100);
};

window.addEventListener('scroll', handleScroll);
return () => {
  window.removeEventListener('scroll', handleScroll);
};

}, []);

// Auto play carousel
useEffect(() => {
const timer = setInterval(() => {
setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
}, 5000);
return () => clearInterval(timer);
}, [carouselItems.length]);

return (
<div className="min-h-screen flex flex-col bg-white">
{/* Header */}
<header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
<div className="container mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
FruYogo
</div>

{/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors">Home</a>
        <a href="#products" className="text-gray-700 hover:text-pink-500 transition-colors">Products</a>
        <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors">About Us</a>
        <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {/* Mobile Navigation */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fadeIn">
        <div className="flex flex-col space-y-4">
          <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#products" className="text-gray-700 hover:text-pink-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      </div>
    )}
  </header>

  <main className="flex-grow">
    {/* Hero Section */}
    <section id="home" className="bg-gradient-to-r from-pink-50 via-pink-100 to-purple-100 py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 transition-all duration-700 ${
          !isScrolling ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Naturally Fruity. <br /> Truly Yummy.
        </h1>
        <img
          src={heroImageURL}
          alt="Yogurt Production"
          className="mx-auto mt-6 rounded-lg shadow-lg w-full max-w-2xl transition-all duration-1000 transform hover:scale-105"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#products"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            Order Now
          </a>
          <button className="bg-white text-pink-500 border border-pink-500 px-4 py-2 rounded shadow-md hover:bg-pink-50 transition-colors transform hover:scale-105">
            See Menu
          </button>
        </div>
      </div>
    </section>

    {/* Product Carousel */}
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Bestsellers
        </h2>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div key={index} className="min-w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl md:text-2xl font-bold">{item.title}</h3>
                    <p className="text-pink-200 text-lg">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-pink-500' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl ${
                !isScrolling ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-pink-500">{product.price}</span>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About Section with Factory Image */}
    <section id="about" className="py-16 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About FruYogo
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
          {/* Factory Image */}
          <div className="mb-8">
            <img
              src={heroImageURL}
              alt="Yogurt Production Facility"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          <p className="text-lg text-gray-700 mb-6">
            FruYogo is a proudly Nigerian yogurt company focused on fresh, healthy, probiotic-rich yogurt.
            We use 100% natural ingredients and real fruit toppings. Our mission is to make tasty nutrition accessible to everyone.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
              <p className="text-gray-600">We use only natural ingredients with no artificial additives or preservatives.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Probiotic Rich</h3>
              <p className="text-gray-600">Our yogurt contains live cultures that promote healthy digestion and immunity.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
              <p className="text-gray-600">We produce fresh yogurt daily to ensure the highest quality and taste.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* People Enjoying Yogurt Section */}
    <section id="people" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          People Love Our Yogurt
        </h2>
        <div className="max-w-5xl mx-auto">
          <img
            src={peopleImageURL}
            alt="People enjoying yogurt"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-16 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-pink-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-gray-700">{address}</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-pink-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5a2 2 0 012-2z"></path>
                </svg>
                <div>
                  <p className="text-gray-700">Phone: <a href={`tel:${phoneNumber}`} className="text-pink-500 hover:underline">{phoneNumber}</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-pink-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <p className="text-gray-700">Email: <a href={`mailto:${email}`} className="text-pink-500 hover:underline">{email}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-6">
    <div className="container mx-auto px-4">
      <p>&copy; {new Date().getFullYear()} FruYogo. All rights reserved.</p>
    </div>
  </footer>
</div>

);
}
