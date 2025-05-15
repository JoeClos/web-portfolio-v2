import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import emailImg from "../assets/email.png";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        toast.success("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Something went wrong. Try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="w-full py-20 px-6 sm:px-10 lg:px-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug text-center lg:text-left text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-center lg:text-left text-gray-700 dark:text-gray-300 font-['DM_Sans'] mb-12">
            Have a question or want to collaborate? Feel free to reach out!
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="flex-1 px-4 py-3 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="flex-1 px-4 py-3 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
            />

            <button
              aria-label="Send message"
              type="submit"
              disabled={loading}
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={emailImg}
            alt="Email illustration"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl h-auto object-contain transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
