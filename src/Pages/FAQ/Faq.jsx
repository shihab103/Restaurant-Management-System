import React, { useState } from "react";

const faqs = [
  {
    question: "How can I place an order online?",
    answer:
      "Browse our menu, add items to your cart, and checkout using your preferred payment method.",
  },
  {
    question: "Do you offer home delivery?",
    answer:
      "Yes! We provide fast home delivery within the local area. Delivery charges may vary.",
  },
  {
    question: "Can I pick up my order from the restaurant?",
    answer:
      "Yes, select the Pickup option while ordering. You’ll be notified when your order is ready.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash on delivery, mobile banking (bKash/Nagad/Rocket), and credit/debit cards.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 25-45 minutes depending on distance and order volume.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer:
      "Orders can be modified within the first 5 minutes. Please contact support immediately.",
  },
  {
    question: "Do you offer discounts?",
    answer:
      "Yes! Visit the Offers section to see current discounts and combos.",
  },
  {
    question: "Is the online menu updated?",
    answer:
      "Yes, our online menu includes all available items with up-to-date prices.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us via live chat, email, or phone between 10 AM - 11 PM.",
  },
  {
    question: "Do you take bulk or catering orders?",
    answer:
      "Yes, catering and bulk orders are available. Contact us 24 hours in advance.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

      {faqs.map((item, index) => (
        <div key={index} className="border-b py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="text-lg font-semibold">{item.question}</span>
            <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
          </button>

          {openIndex === index && (
            <p className="mt-2 text-gray-600">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
