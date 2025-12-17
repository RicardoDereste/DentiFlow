import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutPage.module.css";
import Button from "../../components/Button/Button";

// Image paths
const clinicHeroImage = "/clinic-commitment.jpg";

const teamMembers = [
  {
    name: "Dr. Evelyn Smith, DDS",
    title: "Principal Dentist & Founder",
    bio: "With over 15 years of practice, Dr. Smith is dedicated to painless and preventative dentistry. She specializes in cosmetic procedures and is passionate about using the latest digital technology.",
    image: "/doctor-1.jpg",
  },
  {
    name: "Dr. Alex Johnson, DMD",
    title: "General & Restorative Dentist",
    bio: "Dr. Johnson focuses on restorative treatments, including implants and complex root canals. His patient-first approach emphasizes clear communication and comfort.",
    image: "/doctor-2.jpg",
  },
  {
    name: "Sarah Lee, RDH",
    title: "Registered Dental Hygienist",
    bio: "Sarah is committed to patient education and maintaining long-term oral health. She ensures every cleaning is thorough, gentle, and tailored to individual needs.",
    image: "/doctor-3.jpg",
  },
];

const AboutPage = () => {
  return (
    <main className={styles.aboutPage}>
      {/* 1. Our Story & Mission Hero Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <h1 className={styles.pageHeadline}>Our Commitment to Your Smile</h1>
          <p className={styles.missionText}>
            DentiFlow was founded on the belief that high-quality dental care
            should be accessible, comfortable, and personalized. We strive to
            create a stress-free environment where every patient feels heard and
            cared for. Our mission is to promote long-term dental health and
            deliver smiles that radiate confidence.
          </p>
          <div className={styles.missionHighlights}>
            <p>
              <i className="fa-solid fa-check-circle"></i> Patient-Centric
              Approach
            </p>
            <p>
              <i className="fa-solid fa-check-circle"></i> Commitment to
              Education
            </p>
            <p>
              <i className="fa-solid fa-check-circle"></i> Advanced, Gentle
              Technology
            </p>
          </div>
          <Link to="/contact">
            <Button variant="primary" size="medium">
              Join Our Family
            </Button>
          </Link>
        </div>

        <div className={styles.missionImageContainer}>
          <img
            src={clinicHeroImage}
            alt="Modern DentiFlow Clinic Interior"
            className={styles.actualMissionImage}
          />
        </div>
      </section>

      {/* 2. Meet the Team Section */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet the DentiFlow Team</h2>
        <p className={styles.sectionSubtext}>
          Professional, caring, and ready to help you achieve your best oral
          health.
        </p>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.memberImageContainer}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.actualMemberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p className={styles.memberTitle}>{member.title}</p>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className={styles.servicesCtaSection}>
        <div className={styles.ctaContent}>
          <h2>See How We Can Transform Your Smile.</h2>
          <Link to="/services">
            {/* FIX: Changed variant to 'primary' for better contrast on Orange background */}
            <Button variant="primary" size="large">
              Explore All Services
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
