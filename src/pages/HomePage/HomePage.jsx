import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Button from "../../components/Button/Button";

const heroImagePath = "/images/dental-office-modern.jpg";
const generalServiceImage = "/images/general-dentistry.jpg";
const cosmeticServiceImage = "/images/cosmetic-dentistry.jpg";
const implantServiceImage = "/images/implants-surgery.jpg";

const HomePage = () => {
  return (
    <main className={styles.homePage}>
      {/* 1. HERO SECTION */}
      <section className={`${styles.heroSection} content-container`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            Your Smile, Our Priority.{" "}
            <span className="text-secondary">Exceptional Dental Care.</span>
          </h1>
          <p className={styles.heroSubtext}>
            DentiFlow Clinic uses the latest technology and personalized care to
            ensure you achieve the healthy, beautiful smile you deserve.
          </p>
          <div className={styles.heroActions}>
            <Link to="/contact">
              <Button variant="primary" size="large">
                {/* Font Awesome Icon for Calendar/Booking */}
                <i
                  className="fa-solid fa-calendar-alt"
                  style={{ marginRight: "10px" }}
                ></i>{" "}
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className={styles.heroImage}>
          <img
            src={heroImagePath}
            alt="Modern dental clinic waiting room with comfortable seating"
            className={styles.actualHeroImage}
          />
        </div>
      </section>

      {/* 2. USP SECTION (Unique Selling Propositions) */}
      <section className={styles.uspSection}>
        <div className="content-container">
          <h2 className={styles.sectionTitle}>Why Choose DentiFlow?</h2>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard}>
              {/* Font Awesome Icon for Technology */}
              <i className={`fa-solid fa-microchip ${styles.uspIcon}`}></i>
              <h3>Advanced Technology</h3>
              <p>
                We invest in cutting-edge equipment for precise, comfortable,
                and faster treatments.
              </p>
            </div>

            <div className={styles.uspCard}>
              {/* Font Awesome Icon for Expertise */}
              <i className={`fa-solid fa-graduation-cap ${styles.uspIcon}`}></i>
              <h3>Certified Expertise</h3>
              <p>
                Our team consists of award-winning dentists committed to
                continuous education and skill development.
              </p>
            </div>

            <div className={styles.uspCard}>
              {/* Font Awesome Icon for Comfort */}
              <i
                className={`fa-solid fa-hand-holding-heart ${styles.uspIcon}`}
              ></i>
              <h3>Patient Comfort</h3>
              <p>
                We provide a calming, anxiety-free environment, making every
                visit a pleasant experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section className={`${styles.servicesSection} bg-light`}>
        <div className="content-container">
          <h2 className={styles.sectionTitle}>Our Core Services</h2>
          <p className={styles.sectionSubtext}>
            From preventative maintenance to cosmetic enhancements, we cover all
            aspects of your dental health.
          </p>

          <div className={styles.servicesGrid}>
            {/* Service Card 1: General Dentistry */}
            <div className={styles.serviceCard}>
              <img
                src={generalServiceImage}
                alt="Teeth being cleaned"
                className={styles.serviceImage}
              />
              <div className={styles.cardContent}>
                <h3>General Dentistry</h3>
                <p>
                  Routine checkups, cleanings, and preventative care essential
                  for long-term health.
                </p>
                <div className={styles.serviceLinkWrapper}>
                  <Link to="/services">
                    <Button variant="outline" size="small">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service Card 2: Cosmetic Dentistry */}
            <div className={styles.serviceCard}>
              <img
                src={cosmeticServiceImage}
                alt="Patient smiling after teeth whitening"
                className={styles.serviceImage}
              />
              <div className={styles.cardContent}>
                <h3>Cosmetic Dentistry</h3>
                <p>
                  Teeth whitening, veneers, and bonding to perfect your smile
                  aesthetic.
                </p>
                <div className={styles.serviceLinkWrapper}>
                  <Link to="/services">
                    <Button variant="outline" size="small">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service Card 3: Implants & Surgery */}
            <div className={styles.serviceCard}>
              <img
                src={implantServiceImage}
                alt="Dental implant placed in jaw bone"
                className={styles.serviceImage}
              />
              <div className={styles.cardContent}>
                <h3>Implants & Surgery</h3>
                <p>
                  Expert placement of dental implants and minor oral surgery
                  with minimal discomfort.
                </p>
                <div className={styles.serviceLinkWrapper}>
                  <Link to="/services">
                    <Button variant="outline" size="small">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/services">
            <Button variant="secondary" size="medium">
              Explore All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className={styles.testimonialsSection}>
        <div className="content-container">
          <h2 className={styles.sectionTitle}>What Our Patients Say</h2>
          <div className={styles.testimonialsContainer}>
            {/* Testimonial 1 */}
            <div className={styles.testimonialCard}>
              <p className={styles.quoteText}>
                <i
                  className="fa-solid fa-quote-left"
                  style={{
                    marginRight: "10px",
                    color: "var(--color-secondary)",
                  }}
                ></i>
                "The DentiFlow team made me feel completely at ease. The
                professionalism and care here are unmatched. My results are
                fantastic!"
              </p>
              <p className={styles.quoteAuthor}>— Sarah L.</p>
            </div>

            {/* Testimonial 2 */}
            <div className={styles.testimonialCard}>
              <p className={styles.quoteText}>
                <i
                  className="fa-solid fa-quote-left"
                  style={{
                    marginRight: "10px",
                    color: "var(--color-secondary)",
                  }}
                ></i>
                "After years of avoiding the dentist, DentiFlow changed
                everything. Fast, painless, and excellent communication
                throughout my treatment."
              </p>
              <p className={styles.quoteAuthor}>— David H.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className={styles.finalCtaSection}>
        <div className="content-container">
          <h2>Ready for a Healthier Smile?</h2>
          <p>
            Don't wait—schedule your consultation today and take the first step
            toward optimal dental health.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="large">
              <i
                className="fa-solid fa-calendar-check"
                style={{ marginRight: "10px" }}
              ></i>{" "}
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
