import React from 'react';
import { Clock, Users, Award, BookOpen, Headphones, PenTool, MessageCircle } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'IELTS Academic',
      duration: '8 weeks',
      students: '2,500+',
      price: '$299',
      features: [
        'Academic Writing Task 1 & 2',
        'Academic Reading Strategies',
        'Listening Practice Tests',
        'Speaking Mock Sessions',
        'Band Score Prediction'
      ],
      color: 'blue',
      popular: false
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'IELTS General Training',
      duration: '6 weeks',
      students: '1,800+',
      price: '$249',
      features: [
        'General Writing Task 1 & 2',
        'General Reading Practice',
        'Listening Comprehension',
        'Speaking Confidence Building',
        'Progress Tracking'
      ],
      color: 'teal',
      popular: true
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Speaking Intensive',
      duration: '4 weeks',
      students: '3,200+',
      price: '$199',
      features: [
        'One-on-One Sessions',
        'Pronunciation Training',
        'Fluency Development',
        'Topic-based Practice',
        'Real-time Feedback'
      ],
      color: 'orange',
      popular: false
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: 'Complete IELTS Prep',
      duration: '12 weeks',
      students: '5,000+',
      price: '$499',
      features: [
        'All 4 Skills Training',
        'Unlimited Practice Tests',
        'Personal Study Coach',
        'Weekly Progress Reports',
        'Money-back Guarantee'
      ],
      color: 'green',
      popular: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-100 text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        badge: 'bg-blue-100 text-blue-800'
      },
      teal: {
        bg: 'bg-teal-50',
        icon: 'bg-teal-100 text-teal-600',
        button: 'bg-teal-600 hover:bg-teal-700',
        badge: 'bg-teal-100 text-teal-800'
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'bg-orange-100 text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        badge: 'bg-orange-100 text-orange-800'
      },
      green: {
        bg: 'bg-green-50',
        icon: 'bg-green-100 text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        badge: 'bg-green-100 text-green-800'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our IELTS Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of IELTS preparation courses designed to help you achieve your target band score efficiently.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => {
            const colors = getColorClasses(course.color);
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${course.popular ? 'ring-2 ring-teal-500' : ''}`}
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Course Icon */}
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${colors.icon}`}>
                  {course.icon}
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h3>

                {/* Course Meta */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                  <span className="text-gray-600 ml-1">/course</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Award className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${colors.button}`}>
                  Enroll Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Course is Right for You?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Take our free IELTS level assessment test to get personalized course recommendations based on your current English proficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Take Free Assessment
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;