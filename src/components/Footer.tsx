import React from 'react';
import { BookOpen, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['About Us', 'Courses', 'Mock Tests', 'Study Materials', 'Blog'];
  const courses = ['IELTS Academic', 'IELTS General', 'Speaking Practice', 'Writing Workshop', 'Online Classes'];
  const support = ['Help Center', 'Contact Support', 'Technical Issues', 'Refund Policy', 'Terms & Conditions'];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">IELTS Pro</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students worldwide to achieve their IELTS goals with expert training, innovative technology, and personalized support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@ieltspro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>123 Education Street, Learning City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-white font-semibold text-xl mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest IELTS tips, study materials, and updates delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-200"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 IELTS Pro. All rights reserved. | Privacy Policy | Terms of Service
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;