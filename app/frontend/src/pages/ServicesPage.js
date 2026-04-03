import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Package,
  Search,
  HeadphonesIcon,
  Truck,
  FileText,
  Shield,
  ArrowRight,
} from 'lucide-react';
import Footer from '../components/Footer';
import { useInView } from '../hooks/useInView';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  useSmoothScroll();
  const navigate = useNavigate();
  const [ref, isInView] = useInView();

  const services = [
    {
      icon: Package,
      title: 'Bulk Supply & Wholesale',
      description:
        'Large-scale bearing supply for manufacturers and distributors. Competitive wholesale pricing with consistent quality and timely delivery for your production needs.',
    },
    {
      icon: Search,
      title: 'Custom Bearing Sourcing',
      description:
        'Specialized bearing procurement service. We source rare, discontinued, or custom bearings from global manufacturers to meet your exact specifications.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Technical Consultation',
      description:
        'Expert guidance on bearing selection and application. Our engineers help you choose the right bearing type, size, and material for optimal performance.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery & Logistics',
      description:
        'Pan-India delivery network with express shipping options. Real-time tracking and careful packaging ensure safe, on-time arrival of your bearings.',
    },
    {
      icon: FileText,
      title: 'Annual Maintenance Contracts',
      description:
        'Comprehensive bearing supply and maintenance programs. Regular inspections, replacements, and priority service keep your operations running smoothly.',
    },
    {
      icon: Shield,
      title: 'After-Sales Support',
      description:
        'Dedicated customer support and warranty services. Installation guidance, troubleshooting assistance, and hassle-free returns ensure complete satisfaction.',
    },
  ];

  return (
    <div data-testid="services-page" className="min-h-screen bg-background">
      <Helmet>
        <title>Our Services | Navkar Enterprises</title>
        <meta name="description" content="Navkar Enterprises offers pan-India bulk bearing wholesale, custom sourcing, technical consultation, and logistics for all industrial bearings." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://static.prod-images.emergentagent.com/jobs/610baf28-fe78-45c0-b838-aa4ef6bfb942/images/bbedc58ea12a6f7d5365432001bef4fa18c98ac53bfa8f23946d1f04b1c0f9a3.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-primary">
                Our Services
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              Comprehensive <span className="text-primary">Bearing Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From sourcing to support, we offer end-to-end bearing services tailored to your industrial needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                data-testid={`service-card-${index}`}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Let's discuss your <span className="text-primary">requirement</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our team is ready to provide customized solutions for your bearing needs.
              Get in touch for quotes, consultations, or any queries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                data-testid="services-contact-button"
                className="group px-8 py-4 rounded-full bg-primary text-background font-semibold text-lg flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open('https://wa.me/919702624623?text=Hello%20Navkar%20Enterprises', '_blank')
                }
                data-testid="services-whatsapp-button"
                className="px-8 py-4 rounded-full bg-background border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-background transition-all"
              >
                Chat on WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;