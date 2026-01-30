import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { message } from "antd";
import { FaEnvelope, FaPhoneAlt, FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/contact/create`, form);
      message.success("Message sent successfully");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      message.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-cyan-50 to-green-50 flex items-center justify-center px-4 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          max-w-5xl w-full
          bg-white/80 backdrop-blur-xl
          rounded-3xl shadow-2xl
          p-6 sm:p-10
          border border-white
          grid grid-cols-1 md:grid-cols-2
          gap-8 md:gap-12
        "
      >
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Let us help your business.{" "}
            <span className="text-green-500">amazing</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg">
            I build bespoke software solutions built upon modern technologies.
            My mission is to enable businesses worldwide both large and small to
            build their products with a cost-efficient, resilient and modern
            technology stack
          </p>

          <div className="space-y-3 text-gray-700 text-sm sm:text-base">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <a href="mailto:aqibali541k@gmail.com">aqibali541k@gmail.com</a>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500" />
              <a href="tel:+923078244507">+92 307 8244507</a>
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* NAME */}
          <div className="relative">
            <FaUser className="absolute top-4 left-4 text-gray-400" />
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="
                w-full pl-12 py-3.5
                rounded-xl border border-gray-200
                focus:ring-2 focus:ring-green-400
                outline-none transition
              "
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="
                w-full pl-12 py-3.5
                rounded-xl border border-gray-200
                focus:ring-2 focus:ring-green-400
                outline-none transition
              "
            />
          </div>

          {/* PHONE */}
          <div className="relative">
            <FaPhoneAlt className="absolute top-4 left-4 text-gray-400" />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
              className="
                w-full pl-12 py-3.5
                rounded-xl border border-gray-200
                focus:ring-2 focus:ring-green-400
                outline-none transition
              "
            />
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            required
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="
              w-full p-4
              rounded-xl border border-gray-200
              focus:ring-2 focus:ring-green-400
              outline-none resize-none transition
            "
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            disabled={loading}
            className="
              w-full flex items-center justify-center gap-2
              bg-green-500 hover:bg-green-600
              text-white py-3.5
              rounded-xl font-semibold
              transition shadow-lg cursor-pointer
            "
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
