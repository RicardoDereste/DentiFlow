import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServicesPage.module.css";
import Button from "../../components/Button/Button";

const serviceCategories = [
  {
    category: "General Dentistry",
    image: "/images/general-dentistry.jpg",
    description:
      "Foundation for a healthy smile, including routine check-ups, professional cleanings, and fluoride treatments.",
    services: [
      "Comprehensive Exams",
      "Digital X-Rays",
      "Teeth Cleaning",
      "Fillings",
      "Gum Treatment",
    ],
  },
  {
    category: "Cosmetic Dentistry",
    image: "/images/cosmetic-dentistry.jpg",
    description:
      "Enhance the appearance of your teeth, gums, and bite for a stunning, confident smile.",
    services: [
      "Whitening",
      "Porcelain Veneers",
      "Invisalign",
      "Bonding",
      "Smile Makeovers",
    ],
  },
  {
    category: "Restorative & Implants",
    image: "/images/restorative-implants.jpg",
    description:
      "Repairing or replacing damaged or missing teeth to restore function and aesthetics.",
    services: [
      "Dental Implants",
      "Crowns and Bridges",
      "Root Canal",
      "Dentures",
      "Extractions",
    ],
  },
  {
    category: "Emergency & Specialty",
    image: "/images/emergency-specialty.jpg",
    description:
      "Immediate care for dental trauma and specialized procedures requiring advanced skill.",
    services: [
      "Same-Day Emergency",
      "Pain Management",
      "Sedation",
      "Pediatric Care",
      "TMJ Treatment",
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className={styles.servicesPage}>
      {/* Services Hero Header */}
      <section className={styles.servicesHero}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageHeadline}>
            Comprehensive Dental Services for the Whole Family
          </h1>
          <p className={styles.pageSubtext}>
            At DentiFlow, we offer a full range of modern dental care, focused
            on comfort and lasting results.
          </p>
          <Link to="/contact" className={styles.heroBtnWrapper}>
            <Button variant="accent" size="large">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={styles.servicesGridSection}>
        <div className={styles.gridContainer}>
          {serviceCategories.map((cat, index) => (
            <div key={index} className={styles.serviceCard}>
              <img
                src={cat.image}
                alt={cat.category}
                className={styles.categoryImage}
              />
              <div className={styles.cardPadding}>
                <h2 className={styles.categoryTitle}>{cat.category}</h2>
                <p className={styles.categoryDescription}>{cat.description}</p>
                <div className={styles.serviceList}>
                  <ul>
                    {cat.services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className={styles.serviceCtaLink}>
                  <Button variant="outline" size="small">
                    Book {cat.category}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology/Comfort Section CTA */}
      <section className={styles.technologyCta}>
        <div className={styles.ctaContent}>
          <h2>Our Clinic is Built on Comfort and Technology.</h2>
          <p>
            Explore our commitment to a gentle and precise patient experience.
          </p>
          <Link to="/about" className={styles.ctaLink}>
            <Button variant="primary" size="medium">
              Meet Our Team & Clinic
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
