import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { message } from "antd";
import {
  FaEnvelope, FaPhoneAlt, FaUser, FaPaperPlane,
  FaMapMarkerAlt, FaCheckCircle, FaGithub, FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const SOCIALS = [
  { icon: <FaGithub />, href: "https://github.com/aqibali541k", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/aqib-shabbir-62a16a345", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
  { icon: <FaEnvelope />, href: "mailto:aqibali541k@gmail.com", label: "Email" },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.length < 2) e.name = "Minimum 2 characters";
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) e.email = "Email is required";
    else if (!re.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.length < 10) e.message = "Minimum 10 characters";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const onChange = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
    if (errors[ev.target.name]) setErrors({ ...errors, [ev.target.name]: "" });
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/contact/create`, form);
      message.success("Message sent successfully");
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch { message.error("Failed to send"); }
    finally { setLoading(false); }
  };

  const inputClass = (field) =>
    `w-full bg-secondary-bg border pl-10 pr-4 py-3 rounded-xl outline-none text-primary-text text-sm transition-all placeholder:text-muted-text ${errors[field] ? "border-red-500/70" : "border-border-custom focus:border-primary-blue/60 focus:ring-2 focus:ring-primary-blue/10"}`;

  return (
    <section id="contact" className="py-24 bg-primary-bg px-6 sm:px-8 lg:px-12 border-t border-border-custom transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex rounded-full border border-border-custom bg-secondary-bg px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue transition-colors duration-300">
            Contact
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-primary-text sm:text-5xl transition-colors duration-300">
            Let's Work Together
          </h2>
          <p className="mt-4 text-base leading-8 text-secondary-text max-w-xl mx-auto">
            Whether you need a full-stack app, UI consultation, or backend work — I respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left: details */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-5 text-left"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary-text transition-colors duration-300 mb-2">
                Get in <span className="text-primary-blue">Touch</span>
              </h3>
              <p className="text-secondary-text leading-relaxed text-sm">
                Available for freelance projects, full-time roles, and technical consultations. Let's build something great together.
              </p>
            </div>

            {/* Contact Info Cards */}
            {[
              { icon: <FaEnvelope />, label: "Email", value: "aqibali541k@gmail.com", href: "mailto:aqibali541k@gmail.com" },
              { icon: <FaPhoneAlt />, label: "Phone", value: "+92 307 8244507", href: "tel:+923078244507" },
              { icon: <FaMapMarkerAlt />, label: "Location", value: "Punjab, Pakistan" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card-bg border border-border-custom hover:border-primary-blue/30 transition-colors duration-300">
                <div className="p-2.5 rounded-lg bg-secondary-bg border border-border-custom text-primary-blue text-sm transition-colors duration-300">{c.icon}</div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-semibold text-primary-text hover:text-primary-blue transition-colors">{c.value}</a>
                  ) : (
                    <span className="text-sm font-semibold text-primary-text transition-colors duration-300">{c.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social Icons Row */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text mb-3">Connect</p>
              <div className="flex items-center gap-2">
                {SOCIALS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-card-bg border border-border-custom text-secondary-text hover:border-primary-blue hover:text-primary-blue hover:bg-primary-blue/5 transition-all duration-300 text-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card-bg border border-border-custom rounded-2xl p-5 flex items-center gap-3 transition-colors duration-300 mt-auto">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <div>
                <h4 className="text-sm font-semibold text-primary-text transition-colors duration-300">Available Now</h4>
                <span className="text-xs text-muted-text font-mono">Punjab (GMT+5) · Remote &amp; Hybrid</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-7 bg-card-bg border border-border-custom rounded-2xl p-6 sm:p-8 flex flex-col justify-center transition-colors duration-300"
          >
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center py-10 gap-3 text-center">
                  <FaCheckCircle className="text-green-500 text-5xl" />
                  <h3 className="text-xl font-bold text-primary-text transition-colors duration-300">Message Sent!</h3>
                  <p className="text-secondary-text max-w-sm text-sm">Thanks for reaching out. I'll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} className="space-y-5 text-left">
                  <h3 className="text-lg font-bold text-primary-text mb-2 transition-colors duration-300">Send a Message</h3>

                  {[
                    { name: "name", label: "Your Name", placeholder: "John Doe", icon: <FaUser />, type: "text" },
                    { name: "email", label: "Email Address", placeholder: "john@example.com", icon: <FaEnvelope />, type: "email" },
                    { name: "phone", label: "Phone (Optional)", placeholder: "+92 300 1234567", icon: <FaPhoneAlt />, type: "text" },
                  ].map((f) => (
                    <div key={f.name} className="space-y-1.5">
                      <label className="text-xs font-semibold text-secondary-text uppercase tracking-wider">{f.label}</label>
                      <div className="relative">
                        <span className="absolute top-1/2 -translate-y-1/2 left-3.5 text-muted-text text-[11px]">{f.icon}</span>
                        <input name={f.name} type={f.type} value={form[f.name]} onChange={onChange} placeholder={f.placeholder}
                          className={inputClass(f.name)} />
                      </div>
                      {errors[f.name] && <p className="text-red-500 text-xs font-semibold">{errors[f.name]}</p>}
                    </div>
                  ))}

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-secondary-text uppercase tracking-wider">Message</label>
                    <textarea name="message" rows="4" value={form.message} onChange={onChange} placeholder="Hi Aqib, I'd like to discuss..."
                      className={`w-full bg-secondary-bg border p-4 rounded-xl outline-none text-primary-text text-sm resize-none transition-all placeholder:text-muted-text ${errors.message ? "border-red-500/70" : "border-border-custom focus:border-primary-blue/60 focus:ring-2 focus:ring-primary-blue/10"}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs font-semibold">{errors.message}</p>}
                  </div>

                  <button
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-blue to-purple-500 py-3.5 rounded-xl font-semibold text-white text-sm shadow-glow transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
                  >
                    <FaPaperPlane className="text-[11px]" />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
