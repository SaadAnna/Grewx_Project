import { useState } from "react";

export default function FAQSection() {
    const [openQuestion, setOpenQuestion] = useState("");
    const faqs = [
      {
        question: "How do I open an account with your online bank?",
        answer:
          "You can open an account in just a few minutes through our website or mobile app. Simply click 'Open Account', provide your personal information, verify your identity, and you'll have immediate access to your new account.",
      },
      {
        question: "Is my money safe with your online bank?",
        answer:
          "Absolutely. We are fully licensed and regulated, with deposits insured up to $250,000 per account holder. We also use bank-level encryption and multi-factor authentication to protect your accounts.",
      },
      {
        question: "What are your banking fees?",
        answer:
          "We offer fee-free checking and savings accounts with no minimum balance requirements. Some premium services may have associated fees, which are clearly disclosed before you sign up.",
      },
      {
        question: "How do I deposit checks remotely?",
        answer:
          "Use our mobile app to take photos of the front and back of your endorsed check. Deposits are typically available within one business day, with the first $200 available immediately.",
      },
      {
        question: "What ATM networks can I use without fees?",
        answer:
          "You can use any of our 50,000+ partner ATMs nationwide without fees. We also reimburse up to $10 in other ATM fees per month.",
      },
      {
        question: "How quickly do transfers between accounts process?",
        answer:
          "Transfers between your accounts with us are instant. External transfers typically take 1-3 business days depending on the receiving bank.",
      },
      {
        question: "What security features do you offer?",
        answer:
          "We offer biometric login, real-time fraud monitoring, instant card freezing, transaction alerts, and 24/7 fraud protection to keep your accounts secure.",
      },
    ];

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? "" : question);
  };

  return (
    <section className="max-w-3xl px-4 text-center py-24 mx-auto ">
      <h2 className="text-3xl mx-auto font-Text font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 mt-10">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="border text-start border-gray-200 p-4 rounded-lg bg-white"
          >
            <button
              className="flex justify-between items-center font-Text w-full text-left font-meduim"
              onClick={() => toggleQuestion(faq.question)}
            >
              {faq.question}
              <span>{openQuestion === faq.question ? "-" : "+"}</span>
            </button>
            {openQuestion === faq.question && (
              <p className="mt-2 font-Text text-sm text-neutral-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}