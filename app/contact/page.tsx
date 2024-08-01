"use client"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Page() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        //setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        //setStatus('Failed to send message.');
      }
    } catch (error) {
      //setStatus('An error occurred.');
    }
  };


  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg mt-10 md:mt-20">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Get in Touch</h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <p className="text-lg text-gray-700">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <p className="text-lg text-gray-700">
            Feel free to reach out via email or connect with me on LinkedIn.
          </p>
          <div className="mt-4">
            <p className="text-lg text-gray-800">Email:</p>
            <a href="mailto:adithya2959@hotmail.com" className="text-blue-600 hover:underline">
              adithya2959@hotmail.com
            </a>
          </div>
          <div className="mt-2">
            <p className="text-lg text-gray-800">Phone:</p>
            <a href="tel:+16043479111" className="text-blue-600 hover:underline">
              +1 (604) 347-9111
            </a>
          </div>
        </div>




        <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md" action="#" method="POST">
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              Send Message
              <ArrowRightIcon className="w-3 md:w-3" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

