import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      score: 'Band 8.5',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      text: 'IELTS Pro completely transformed my preparation strategy. The AI band predictor was incredibly accurate, and the speaking sessions with expert trainers boosted my confidence tremendously.',
      country: 'Canada'
    },
    {
      name: 'Rajesh Kumar',
      score: 'Band 8.0',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      text: 'The personalized study plan was exactly what I needed. Within 3 months, I went from band 6.5 to 8.0. The mock tests were challenging and prepared me perfectly for the actual exam.',
      country: 'India'
    },
    {
      name: 'Maria Rodriguez',
      score: 'Band 7.5',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      text: 'As a working professional, the flexible schedule and comprehensive online resources were perfect for me. The detailed performance reports helped me focus on my weak areas.',
      country: 'Spain'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of students who have achieved their dream IELTS scores with IELTS Pro. Here's what they have to say about their journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Student Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold mr-2">
                      {testimonial.score}
                    </span>
                    <span>{testimonial.country}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards your IELTS success. Book your free consultation today and discover how we can help you achieve your target band score.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;