import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://wa.me/919702624623?text=Hello%20Navkar%20Enterprises', '_blank');
  };

  return (
    <motion.button
      data-testid="whatsapp-float-button"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-4 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
    >
      <motion.div
        animate={isHovered ? {} : { scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="font-semibold whitespace-nowrap overflow-hidden"
          >
            Chat with us
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default WhatsAppButton;