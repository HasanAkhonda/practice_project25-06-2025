'use client';
import { ReactNode, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface FaqItemProps {
    
  question: ReactNode;
  answer: ReactNode;
}

const FAQItems = ({ question, answer  }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="border-b w-full border-gray-200 py-4">
      <div className="w-full flex justify-between items-center cursor-pointer" onClick={handleClick}>
        <span className="text-black text-lg font-medium font-Inter leading-7">
          {question}
        </span>
        {isOpen ? (
          <FaMinus className="w-4 h-4 text-gray-700" />
        ) : (
          <FaPlus className="w-4 h-4 text-gray-700 hover:rotate-180 transition-transform duration-300" />
        )}
      </div>

      {isOpen && (
        <div className="mt-3 text-gray-600 text-sm leading-6 px-2">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItems;
