"use client";
import React, { useState } from "react";
import { Pacifico } from "next/font/google";
import { Judson } from "next/font/google";
import { Geist } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const judson = Judson({ subsets: ["latin"], weight: "700" });
const geist = Geist({ subsets: ["latin"], weight: "500" });

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus("⚠️ Failed to send. Please check your details.");
      }
    } catch (err) {
      setStatus("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-1 md:px-60 ">
      <div className="max-w-7xl flex flex-col lg:flex-row items-center justify-center h-[500px] ">
        {/* Left: Heading */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start mt-3 md:mt-3 mb-0 lg:mb-0">
          <div className="flex flex-col items-center">
            <div
              className={`text-[30px] md:text-[44px] font-bold text-black ${pacifico.className}`}
            >
              <span>Get In</span>
            </div>
            <div
              className={`text-[50px] md:text-[99px] font-serif font-normal text-white leading-none -mt-6 md:-mt-12 ${judson.className}`}
            >
              Touch
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex h-[330px] md:h-[530px]">
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col items-start md:items-center justify-center gap-[10px]"
          >
            <div>
              <label
                className={`block text-[24px] md:text-[28px] font-bold text-[#1E1E1E] ${judson.className}`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-[310px] md:w-[394px] h-[40px] md:h-[54px] px-2 text-md rounded-none bg-white shadow-[4px_4px_0px_0px_#800357] border-[2px] border-[#800357] outline-none ${geist.className}`}
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                className={`block text-[24px] md:text-[28px] font-bold text-[#1E1E1E] ${judson.className}`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-[310px] md:w-[394px] h-[40px] md:h-[54px] px-2 text-md rounded-none bg-white shadow-[4px_4px_0px_0px_#800357] border-[2px] border-[#800357] outline-none ${geist.className}`}
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                className={`block text-[24px] md:text-[28px] font-bold text-[#1E1E1E] ${geist.className}`}
              >
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`w-[310px] md:w-[394px] h-[80px] md:h-[110px] py-2 px-2 text-md rounded-none bg-white shadow-[4px_4px_0px_0px_#800357] border-[2px] border-[#800357] outline-none ${geist.className}`}
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-[310px] md:w-[394px] h-[49px] md:h-[54px] px-4 bg-[#FFEDED] text-[#2d002b] text-[22px] md:text-[28px] font-bold shadow-[6px_6px_0px_0px_#891c53] mt-2 transition hover:bg-pink-200 ${judson.className}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="mt-2 text-sm text-gray-700">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
