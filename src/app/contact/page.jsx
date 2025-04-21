"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-Melodrama-regular mb-12">
          Contact
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <span className="text-xl">ahmad@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <span className="text-xl">+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6" />
              <span className="text-xl">New York, USA</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-blue-500 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-blue-500 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-blue-500 py-2 h-32 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
