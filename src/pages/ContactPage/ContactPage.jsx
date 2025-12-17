import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ContactPage.module.css";
import Button from "../../components/Button/Button";

const clinicDetails = {
  phone: "+44 99 9999 9999",
  email: "appointments@dentiflow.com",
  addressLine1: "123 Strand",
  addressLine2: "London, United Kingdom",
  hours: [
    { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  emergency:
    "For emergencies outside of business hours, please call +44 99 9999 9999.",
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you shortly.");
  };

  return (
    <main className={styles.contactPage}>
      <section className={styles.header}>
        <h1 className={styles.pageHeadline}>Get in Touch with DentiFlow</h1>
        <p className={styles.pageSubtext}>
          Ready to book your next appointment? Fill out the form below or call
          us directly!
        </p>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          {/* 1. Contact Form */}
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Request an Appointment</h2>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
              />

              <select
                name="service"
                required
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Service Interest
                </option>
                <option value="checkup">General Check-up & Cleaning</option>
                <option value="cosmetic">Cosmetic Consultation</option>
                <option value="emergency">Dental Emergency</option>
                <option value="other">Other Inquiry</option>
              </select>

              <textarea
                name="message"
                placeholder="Preferred Appointment Time"
                rows="4"
                required
                onChange={handleChange}
              ></textarea>

              <label className={styles.privacyCheckbox}>
                <input type="checkbox" required /> I agree to the{" "}
                <Link to="/privacy">Privacy Policy</Link>
              </label>

              <Button type="submit" variant="primary" size="large">
                Send Request
              </Button>
            </form>
          </div>

          {/* 2. Clinic Details */}
          <div className={styles.detailsContainer}>
            <h2 className={styles.detailsTitle}>Our Information</h2>

            <div className={styles.detailBlock}>
              <h3>
                <i className="fa-solid fa-phone"></i> Phone
              </h3>
              <a
                href={`tel:${clinicDetails.phone}`}
                className={styles.detailLink}
              >
                {clinicDetails.phone}
              </a>
            </div>

            <div className={styles.detailBlock}>
              <h3>
                <i className="fa-solid fa-envelope"></i> Email
              </h3>
              <a
                href={`mailto:${clinicDetails.email}`}
                className={styles.detailLink}
              >
                {clinicDetails.email}
              </a>
            </div>

            <div className={styles.detailBlock}>
              <h3>
                <i className="fa-solid fa-location-dot"></i> Address
              </h3>
              <p>{clinicDetails.addressLine1}</p>
              <p>{clinicDetails.addressLine2}</p>
            </div>

            <div className={styles.detailBlock}>
              <h3>
                <i className="fa-solid fa-clock"></i> Business Hours
              </h3>
              <ul className={styles.hoursList}>
                {clinicDetails.hours.map((item, index) => (
                  <li key={index}>
                    <strong>{item.day}:</strong> {item.time}
                  </li>
                ))}
              </ul>
              <p className={styles.emergencyText}>{clinicDetails.emergency}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Real Embedded Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1516.126259677198!2d-0.1257226257730791!3d51.5089283501656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1765979097687!5m2!1sen!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DentiFlow Location Map"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
