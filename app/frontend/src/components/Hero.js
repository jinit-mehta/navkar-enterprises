import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        delay: 0.5,
        duration: 1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919702624623?text=Hello%20Navkar%20Enterprises', '_blank');
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="https://static.prod-images.emergentagent.com/jobs/610baf28-fe78-45c0-b838-aa4ef6bfb942/images/06f36f53d7ba6847f86b829f0a466e91a1b4d96f4f9a88369b842cb33b738998.png"
          alt="Premium Ball Bearing"
          className="w-full h-full object-cover opacity-80 dark:opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-primary">
            SINCE - 20+ YEARS
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]"
        >
          <span className="block">BEARING SUPPLIER</span>
          <span className="block text-primary">AND STOCKIST</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We are a trusted bearing supplier and stockist with decades of market experience. We specialize in sourcing high-quality bearings at the best prices with fast turnaround time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            data-testid="hero-explore-products-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/products')}
            className="group px-8 py-4 rounded-full bg-primary text-background font-semibold text-lg flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            Explore Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            data-testid="hero-whatsapp-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="group px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg flex items-center gap-2 hover:bg-white/20 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;