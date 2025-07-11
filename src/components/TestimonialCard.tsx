import React from 'react';
import { Star, User } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, text, rating }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-gray-300 text-sm">{location}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
          />
        ))}
      </div>
      <p className="text-gray-200 text-sm leading-relaxed">{text}</p>
    </div>
  );
};

export default TestimonialCard;