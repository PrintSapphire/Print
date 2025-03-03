import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = 'service_n2urts6';
    const templateId = 'template_s1pfr8t';
    const publicKey = 'Nyw-aq0wxwPzckJqe';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'aoman5217@gmail.com'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setSubmitStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSubmitStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="contact" className="py-16 bg-gradient-to-br from-purple-100 to-purple-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 text-purple-800 drop-shadow-md">
          Let’s Connect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {/* Transparent Get in Touch Section without Border */}
          <div className="w-full md:w-auto bg-white bg-opacity-20 backdrop-blur-md p-4 md:p-8 rounded-xl shadow-lg flex flex-col justify-between h-auto md:h-full transform hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-2 text-purple-800 text-center transition-transform duration-300 transform hover:scale-105">Get in Touch</h3>
            <div className="flex-grow flex flex-col justify-center space-y-6 md:space-y-10 text-gray-800">
              <div className="flex items-center justify-start space-x-6 md:space-x-9">
                <span className="material-icons text-purple-600 text-xl md:text-2xl">Phone:</span>
                <p className="text-lg md:text-xl text-purple-800 transition-colors duration-300 hover:text-purple transition-transform duration-300 transform hover:scale-105">9811512018, 7908331875</p>
              </div>
              <div className="flex items-center justify-start space-x-8 md:space-x-12">
                <span className="material-icons text-purple-600 text-xl md:text-2xl">Email:</span>
                <p className="text-lg md:text-xl text-purple-800 transition-colors duration-300 hover:text-purple transition-transform duration-300 transform hover:scale-105">printsapphire25@gmail.com</p>
              </div>
              <div className="flex items-center justify-start space-x-2 md:space-x-3">
                <span className="material-icons text-purple-600 text-xl md:text-2xl">Location: </span>
                <p className="leading-tight text-lg md:text-xl text-purple-800 transition-colors duration-300 hover:text-purple transition-transform duration-300 transform hover:scale-105">
                  <span>B-37, Street No.-15, MadhuVihar, I.P. Extn, Delhi-92</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white p-4 md:p-8 rounded-xl shadow-lg border border-purple-300 space-y-4 md:space-y-6 transform hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all duration-200 placeholder-gray-400 text-gray-800 text-sm md:text-base"
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
                className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all duration-200 placeholder-gray-400 text-gray-800 text-sm md:text-base"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-lg h-24 md:h-36 focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all duration-200 placeholder-gray-400 text-gray-800 text-sm md:text-base"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus && (
              <p
                className={`mt-2 md:mt-4 text-center font-medium animate-fade-in ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'} text-sm md:text-base`}
              >
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;