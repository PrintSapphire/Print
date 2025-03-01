import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // For success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); // Reset status

    // EmailJS configuration (replace with your actual EmailJS credentials)
    const serviceId = 'service_n2urts6'; // Replace with your EmailJS Service ID
    const templateId = 'template_s1pfr8t'; // Replace with your EmailJS Template ID
    const publicKey = 'Nyw-aq0wxwPzckJqe'; // Replace with your EmailJS Public Key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'aoman5217@gmail.com' // Destination email
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setSubmitStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
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
    <div id="contact" className="py-16 bg-purple-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <p className="mb-2 text-gray-600">Phone: 9811512018, 7908331875</p>
            <p className="mb-2 text-gray-600">Email: printsapphire25@gmail.com</p>
            <p className="mb-2 text-gray-600">
              Address: B-37, Street No.-15, Madhu Vihar,<br />
              I.P. Extn., Delhi-92
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md border border-purple-200">
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
              className={`bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus && (
              <p className={`mt-4 ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
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