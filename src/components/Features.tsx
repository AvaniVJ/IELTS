import React from 'react';
import { Mic, BarChart3, Brain, BookOpen } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: 'Speaking Practice with Experts',
      description: 'One-on-one sessions with certified IELTS trainers to improve your speaking confidence and fluency.',
      color: 'blue'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Mock Tests & Performance Reports',
      description: 'Complete practice tests with detailed analytics to track your progress and identify improvement areas.',
      color: 'teal'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI Band Score Predictor',
      description: 'Advanced AI technology predicts your band score and provides personalized recommendations for improvement.',
      color: 'orange'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Personalized Study Plan',
      description: 'Custom learning paths tailored to your current level, target score, and exam date for optimal results.',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose IELTS Pro?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive training program combines expert guidance with cutting-edge technology to ensure your IELTS success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-blue-600">24/7</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Round-the-Clock Support</h4>
              <p className="text-sm text-gray-600">Get help whenever you need it with our 24/7 student support system.</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-teal-600">∞</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Unlimited Practice</h4>
              <p className="text-sm text-gray-600">Access unlimited practice tests and materials until you achieve your goal.</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-orange-600">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Money-Back Guarantee</h4>
              <p className="text-sm text-gray-600">We're so confident in our program, we offer a full money-back guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;