import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="neumorphic rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className={`w-full px-4 py-3 text-left sd-neumorphic-btn flex justify-between items-center rounded-t-xl ${isOpen ? 'rounded-b-none' : 'rounded-xl'}`}
      >
        <span className="font-medium text-gray-900 dark:text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 sd-neumorphic">
          <p className="text-gray-700 dark:text-gray-300">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};

const SDAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default SDAccordion;
