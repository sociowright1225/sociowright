"use client"

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      // Replace with your API endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error sending message");

      setSuccess("Thank you! We’ll contact you shortly.");
      setForm({ name: "", email: "", phone: "", budget: "", message: "" });
    } catch (err) {
      setSuccess("Something went wrong. Try again!");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-3xl mx-auto p-6  rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2"
        />

        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2"
        >
          <option value="">Select Budget</option>
          <option value="<$500">Less than $500</option>
          <option value="$500–$2000">$500 – $2,000</option>
          <option value="$2000–$5000">$2,000 – $5,000</option>
          <option value="$5000+">More than $5,000</option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2"
        ></textarea>

        <button
          disabled={loading}
          className="w-full bg-[#5D804B] hover:bg-[#466139] text-white py-3 rounded-lg transition"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {success && (
          <p className="text-center mt-2 font-semibold text-green-600">
            {success}
          </p>
        )}
      </form>
    </section>
  );
}
