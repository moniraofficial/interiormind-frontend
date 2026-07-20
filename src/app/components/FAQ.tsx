'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { question: "How does AI interior design work?", answer: "Our AI analyzes your room layout, lighting, and dimensions to suggest personalized design styles and furniture arrangements instantly." },
  { question: "Can I upload multiple room photos?", answer: "Yes, you can upload multiple photos of different rooms, and our AI will provide customized designs for each space." },
  { question: "Is my data and photos secure?", answer: "Absolutely. We use industry-standard encryption to ensure your photos and personal data remain private and secure." },
  { question: "Can I customise the AI generated designs?", answer: "Yes, our platform allows you to tweak colors, furniture styles, and layouts to match your personal taste perfectly." },
  { question: "Do I get shopping links for furniture?", answer: "Yes! Every design recommendation comes with curated shopping links so you can easily purchase the items you love." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        {/* Header */}
        {/* <span className="text-xs font-bold text-green-900 bg-green-100 px-3 py-1 rounded-full tracking-wider uppercase mb-4 inline-block">
          HAVE QUESTIONS?
        </span> */}


          <p className="text-emerald-800 font-bold text-sm tracking-widest uppercase mb-10">
          HAVE QUESTIONS?
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-500 mb-12">Can't find what you're looking for? Reach out to our customer support team anytime.</p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left font-semibold text-gray-900"
              >
                {faq.question}
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 text-left leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}