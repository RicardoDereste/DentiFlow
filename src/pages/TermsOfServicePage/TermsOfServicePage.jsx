import React from "react";
import styles from "./TermsOfServicePage.module.css";
import { Link } from "react-router-dom";

const TermsOfServicePage = () => {
  const effectiveDate = "January 1, 2026";

  return (
    <main className={styles.termsPage}>
      {/* Header Section */}
      <section className={styles.header}>
        <h1 className={styles.pageHeadline}>Terms of Service</h1>
        <p className={styles.effectiveDate}>Effective Date: {effectiveDate}</p>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the DentiFlow Clinic website ("Service"), you
          agree to be bound by these Terms of Service ("Terms"). If you disagree
          with any part of the terms, then you may not access the Service.
        </p>

        <h2 className={styles.sectionTitle}>2. Use of the Service</h2>
        <p>
          The DentiFlow website is provided for informational and appointment
          scheduling purposes only. You agree not to use the Service for any
          unlawful or prohibited purpose. You must be at least 18 years of age
          to use the online booking features.
        </p>

        <h2 className={styles.sectionTitle}>
          3. Appointment Booking and Cancellation
        </h2>
        <p>
          All appointment bookings made through the Service are subject to
          confirmation by DentiFlow Clinic staff. We reserve the right to cancel
          or reschedule appointments as necessary. Our cancellation policy
          requires 24 hours notice to avoid a fee.
        </p>

        <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
        <p>
          The content, features, and functionality of the Service (including the
          DentiFlow name, logo, and all original text) are and will remain the
          exclusive property of DentiFlow Clinic. You may not reproduce or
          redistribute any part of the website without written permission.
        </p>

        <h2 className={styles.sectionTitle}>5. Contact Information</h2>
        <p>
          Questions about the Terms of Service should be sent to us at{" "}
          <a href="mailto:info@dentiflow.com">info@dentiflow.com</a>.
        </p>
      </section>
    </main>
  );
};

export default TermsOfServicePage;
