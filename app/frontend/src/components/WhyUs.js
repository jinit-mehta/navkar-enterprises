import { motion } from 'framer-motion';
import { Shield, Award, Truck, Package } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const WhyUs = () => {
  const [ref, isInView] = useInView();

  const features = [
    {
      icon: Package, // For sourcing
      title: 'Fast & Reliable Sourcing',
      description: 'We source high-quality bearings quickly to meet your urgent needs.',
    },
    {
      icon: Shield, // For quality assurance
      title: 'Premium Quality Assurance',
      description: 'Authentic products backed by strict quality checks.',
    },
    {
      icon: Truck, // For delivery
      title: 'Lightning Fast Delivery',
      description: 'Quick dispatch and reliable logistics across India.',
    },
    {
      icon: Award, // For pricing (or something suitable from lucide)
      title: 'Competitive Pricing',
      description: 'Best market rates for premium bearings.',
    },
    {
      icon: Package, // For bulk
      title: 'Bulk Order Specialist',
      description: 'Equipped to handle high volumes without compromising quality.',
    },
    {
      icon: Shield, // For guarantee
      title: 'Genuine Product Guarantee',
      description: '100% authentic bearings directly from trusted networks.',
    },
    {
      icon: Award, // For network
      title: 'Strong Vendor Network',
      description: 'Direct tie-ups ensuring seamless availability.',
    },
    {
      icon: Award, // For technical support
      title: 'Technical Support & Guidance',
      description: 'Expert advice for all your bearing requirements.',
    },
  ];

  return (
    <section
      ref={ref}
      data-testid="why-us-section"
      className="py-24 md:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Services We <span className="text-primary">Provide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your partner for precision-engineered bearing solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              data-testid={`why-us-card-${index}`}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;