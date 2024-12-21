"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navbar from "../Navbar/page";
import "../Contact/contact.css"

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Thanks For Contacting Me");
  };

  return (
    <>
      <Navbar />
      <section className="py-12 bg-gray-100">
        <div className="container">
          <h2 className="contact-heading">Contact Me</h2>

          {/* Social Links Section */}
          <div className="social-links">
            <Link href="https://github.com/Ansharahkhan76">
              <Image
                alt="Github"
                height={40}
                width={40}
                src="/github.png"
                className="filter grayscale"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/ansharah-khan-25a8162b7">
              <Image
                alt="LinkedIn"
                height={40}
                width={40}
                src="/linkedin.webp"
                className="filter grayscale"
              />
            </Link>
            <Link href="mailto:anshrahkhan29@gmail.com">
              <Image
                alt="Email"
                height={40}
                width={40}
                src="/email.jpg"
                className="filter grayscale"
              />
            </Link>
            <Link href="https://www.instagram.com/_ansharah.khan_">
              <Image
                alt="Instagram"
                height={40}
                width={40}
                src="/insta.png"
                className="filter grayscale"
              />
            </Link>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
               
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
