import React from "react";
import styles from "./PrivacyPolicyPage.module.css";

const PrivacyPolicyPage = () => {
  const lastUpdated = "December 15, 2025";

  return (
    <main className={styles.privacyPage}>
      {/* Header Section */}
      <section className={styles.header}>
        <h1 className={styles.pageHeadline}>Privacy Policy for DentiFlow</h1>
        <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us
          when you express an interest in obtaining information about us or our
          services, when you participate in activities on the website, or
          otherwise when you contact us.
        </p>
        <p>
          The personal information that we collect depends on the context of
          your interactions with us and the website, the choices you make, and
          the services and features you use. This may include your name, email
          address, phone number, and health insurance information (for
          appointment booking).
        </p>

        <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for various
          business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations.
        </p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To send you marketing and promotional communications.</li>
          <li>To respond to your inquiries and offer support to users.</li>
          <li>To fulfill and manage your appointments and service requests.</li>
        </ul>

        <h2 className={styles.sectionTitle}>
          3. Will Your Information Be Shared With Anyone?
        </h2>
        <p>
          We only share information with your consent, to comply with laws, to
          provide you with services, to protect your rights, or to fulfill
          business obligations. As a healthcare provider, we strictly adhere to
          all applicable patient privacy regulations (e.g., HIPAA equivalents in
          your jurisdiction).
        </p>

        <h2 className={styles.sectionTitle}>4. Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may contact
          us by phone or email:
        </p>
        <p>
          DentiFlow Clinic
          <br />
          Email: <a href="mailto:info@dentiflow.com">info@dentiflow.com</a>
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
