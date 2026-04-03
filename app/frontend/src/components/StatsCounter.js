import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const StatsCounter = () => {
  const [ref, isInView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { value: 20, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Product Types' },
    { value: 1000, suffix: '+', label: 'Happy Clients' },
    { value: 50000, suffix: '+', label: 'Bearings Supplied' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = end;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
          }
        }, 16);
      });
    }
  }, [isInView, hasAnimated]);

  return (
    <section
      ref={ref}
      data-testid="stats-section"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <img
          src="https://static.prod-images.emergentagent.com/jobs/610baf28-fe78-45c0-b838-aa4ef6bfb942/images/bf794d774eda90084ed0f92525cc018d5ce4b9f91816bf71b1d0cf0020456483.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`stat-card-${index}`}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl font-black text-primary mb-2">
                {counts[index].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;