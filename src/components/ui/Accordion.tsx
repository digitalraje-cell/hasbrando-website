'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="accordion-item">
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <svg
                className={`accordion-icon ${isOpen ? 'open' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="accordion-content-inner">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
