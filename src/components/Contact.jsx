import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div id="contact" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <p className="mb-2 text-gray-600">Phone: 9811512018, 7908331875</p>
            <p className="mb-2 text-gray-600">Email: printsapphire25@gmail.com</p>
            <p className="mb-2 text-gray-600">
              Address: B-37, Street No.-15, Madhu Vihar,<br />
              I.P. Extn., Delhi-92
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-purple-50 p-6 rounded-lg shadow-md">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded h-32 focus:ring-purple-500 focus:border-purple-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;