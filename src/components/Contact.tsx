import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'blue'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@ieltspro.com', 'support@ieltspro.com'],
      color: 'teal'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: ['123 Education Street', 'Learning City, LC 12345'],
      color: 'orange'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 8:00 PM', 'Sat - Sun: 10:00 AM - 6:00 PM'],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      teal: 'bg-teal-100 text-teal-600',
      orange: 'bg-orange-100 text-orange-600',
      green: 'bg-green-100 text-green-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your IELTS journey? Contact us today for personalized guidance and support. We're here to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a course</option>
                    <option value="ielts-academic">IELTS Academic</option>
                    <option value="ielts-general">IELTS General Training</option>
                    <option value="speaking-intensive">Speaking Intensive</option>
                    <option value="complete-prep">Complete IELTS Prep</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your IELTS goals and any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(info.color)}`}>
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book Free Consultation</span>
                </button>
                <button className="w-full bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Start Live Chat</span>
                </button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Visit Our Campus</h4>
              <p className="text-gray-600 text-sm mb-4">
                Come visit our modern learning facility equipped with the latest technology and comfortable study spaces.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our IELTS courses and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">How long does it take to prepare for IELTS?</h4>
                <p className="text-gray-600 text-sm">
                  Preparation time varies based on your current English level and target score. Most students need 6-12 weeks of focused preparation.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Do you offer online classes?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, we offer both in-person and online classes with live instructors, interactive sessions, and recorded materials for review.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">What is your success rate?</h4>
                <p className="text-gray-600 text-sm">
                  95% of our students achieve their target band score within their first attempt, with an average improvement of 1.5 bands.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide study materials?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, all courses include comprehensive study materials, practice tests, and access to our online learning platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;