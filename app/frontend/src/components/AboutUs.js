import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const AboutUs = () => {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-primary">
                About Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              A Legacy of <span className="text-primary">Trust</span> & <span className="text-primary">Reliability</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are a trusted bearing supplier and stockist with decades of market experience. 
                We specialize in sourcing high-quality bearings at the best prices with fast turnaround time.
              </p>
              <p>
                Our strong market network allows us to fulfill urgent and bulk requirements efficiently 
                without compromising on quality.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-3xl overflow-hidden border border-border shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <img
              src="/images/industrial.webp"
              alt="Industrial Bearings"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
              <h3 className="text-2xl font-bold mb-2">20+ Years</h3>
              <p className="opacity-90">Delivering excellence nationwide</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
