import React, { useState } from "react";
import styles from "./FAQPage.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const faqData = [
  {
    category: "Appointments & Insurance",
    questions: [
      {
        q: "Do you accept my insurance?",
        a: "We accept most major dental PPO plans. Please call our office with your insurance details before your visit to verify coverage.",
      },
      {
        q: "What should I bring to my first appointment?",
        a: "Please bring your photo ID, insurance card, and a list of any current medications. New patient forms are available on our website.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We require a minimum of 24 hours notice for any cancellation. Failure to provide notice may result in a cancellation fee.",
      },
    ],
  },
  {
    category: "Treatments & Procedures",
    questions: [
      {
        q: "Are digital X-rays safe?",
        a: "Yes, digital X-rays produce significantly lower radiation levels than traditional film X-rays and are a safe diagnostic tool.",
      },
      {
        q: "How often should I get a dental cleaning?",
        a: "We recommend professional cleanings and check-ups every six months to prevent plaque buildup and detect issues early.",
      },
      {
        q: "Do you offer sedation dentistry?",
        a: "We offer several forms of mild sedation for comfort. Please discuss your needs with Dr. Smith during your consultation.",
      },
    ],
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={styles.faqPage}>
      <section className={styles.header}>
        <h1 className={styles.pageHeadline}>Frequently Asked Questions</h1>
        <p className={styles.pageSubtext}>
          Find quick answers to the most common questions about DentiFlow.
        </p>
      </section>

      <section className={styles.accordionSection}>
        {faqData.map((categoryBlock, categoryIndex) => (
          <div key={categoryIndex} className={styles.categoryBlock}>
            <h2 className={styles.categoryTitle}>
              <i
                className="fa-solid fa-folder-open"
                style={{ marginRight: "12px", fontSize: "1.2rem" }}
              ></i>
              {categoryBlock.category}
            </h2>

            <div className={styles.accordionContainer}>
              {categoryBlock.questions.map((item, qIndex) => {
                const uniqueIndex = `${categoryIndex}-${qIndex}`;
                const isOpen = openIndex === uniqueIndex;

                return (
                  <div key={qIndex} className={styles.faqItem}>
                    <button
                      className={styles.questionButton}
                      onClick={() => toggleAnswer(uniqueIndex)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <span
                        className={`${styles.toggleIcon} ${
                          isOpen ? styles.open : ""
                        }`}
                      >
                        {/* Font Awesome Plus/Minus Icons */}
                        <i
                          className={`fa-solid ${
                            isOpen ? "fa-minus" : "fa-plus"
                          }`}
                        ></i>
                      </span>
                    </button>

                    <div
                      className={`${styles.answer} ${
                        isOpen ? styles.answerOpen : ""
                      }`}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Final CTA Section */}
      <section className={styles.helpCtaSection}>
        <div className={styles.ctaContent}>
          <h2>Still have questions?</h2>
          <p>Our friendly staff is ready to assist you directly.</p>
          <Link to="/contact">
            <Button variant="accent" size="large">
              Contact Our Office
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
