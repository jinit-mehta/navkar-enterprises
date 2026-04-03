import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const [ref, isInView] = useInView();
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/919702624623?text=Need%20Bearings%20Urgently!', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919702624623';
  };

  return (
    <section ref={ref} className="py-24 bg-primary text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
            Need Bearings Urgently?
          </h2>
          <p className="text-xl sm:text-2xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Contact us now for the best price & fastest delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-4 bg-background text-foreground font-bold rounded-full text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-6 h-6 text-green-500" />
              WhatsApp Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-background text-background font-bold rounded-full text-lg flex items-center justify-center gap-3 hover:bg-background/10 transition-all"
            >
              <Phone className="w-6 h-6" />
              Call Directly
            </motion.button>
          </div>
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="text-background underline decoration-2 underline-offset-4 text-lg font-semibold opacity-90 hover:opacity-100"
            >
              Get Instant Quote →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
