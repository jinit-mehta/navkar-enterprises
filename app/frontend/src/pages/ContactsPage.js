import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const CONTACT_EMAIL = "navkarenterprise71@gmail.com";

const ContactPage = () => {
  useSmoothScroll();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const subject = encodeURIComponent(
        `Contact Form Inquiry from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );

      const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(
        "Failed to open email client. Please contact us directly via WhatsApp or email."
      );
      console.error("Contact form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-primary">
                Get In Touch
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Contact <span className="text-primary">Navkar Enterprises</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our bearings or services? We're here to help.
              Reach out to us today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                data-testid="success-message"
                className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-600"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you! We'll get back to you soon.</span>
              </motion.div>
            )}

            {error && (
              <div
                data-testid="error-message"
                className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600"
              >
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="space-y-6"
            >
              {["name", "email", "phone"].map((field) => (
                <div key={field}>
                  <label className="block text-sm mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-card"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-full bg-primary text-white font-semibold flex justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} />}
              </motion.button>
            </form>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">Contact Information</h2>

            <div className="space-y-6">
              <a href="mailto:navkarenterprise71@gmail.com" className="flex gap-4">
                <Mail /> navkarenterprise71@gmail.com
              </a>

              <a href="tel:+919702624623" className="flex gap-4">
                <Phone /> +91 97026 24623
              </a>

              <div className="flex gap-4">
                <MapPin className="shrink-0 mt-1" />
                <span className="whitespace-pre-line">
                  115/ NAGDEVI STREET ,<br />
                  ROOM NO. - 13 ,<br />
                  MUMBAI - 400003
                </span>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919702624623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-500 text-white rounded-full"
            >
              Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="h-64 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.568865654359!2d72.83165607558452!3d18.950468182228388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf5546f6b489%3A0x9ec355463ca05155!2sNAVKAR%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1775114666349!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                title="Map"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;