import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Crack IELTS with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Confidence
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Join thousands of successful students who achieved their dream IELTS scores with our expert-guided training, personalized study plans, and AI-powered practice sessions.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Book Free Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600 mt-1">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">8.5</div>
                <div className="text-sm text-gray-600 mt-1">Average Band Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-600 mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                alt="Students studying IELTS"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-100 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;