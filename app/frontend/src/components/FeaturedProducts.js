import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [ref, isInView] = useInView();

  const products = [
    {
      name: 'Deep Groove Ball Bearing',
      category: 'Ball Bearings',
      image: '/images/deep-grove-ball.webp',
    },
    {
      name: 'Tapered Roller Bearing',
      category: 'Roller Bearings',
      image: '/images/tapered-roller.webp',
    },
    {
      name: 'Pillow Block Bearing',
      category: 'Mounted Units',
      image: '/images/pillow-block.webp',
    },
    {
      name: 'Spherical Roller Bearing',
      category: 'Heavy Duty',
      image: '/images/spherical-roller.webp',
    },
    {
      name: 'Needle Roller Bearing',
      category: 'Compact Design',
      image: '/images/needle-roller.webp',
    },
    {
      name: 'Thrust Ball Bearing',
      category: 'Axial Load',
      image: '/images/thrust-bearing.webp',
    },
    {
      name: 'Self Aligning Ball Bearing',
      category: 'Axial Load',
      image: '/images/self-aligning.webp',
    },
    {
      name: 'Angular Contact Ball Bearing',
      category: 'Axial Load',
      image: '/images/angular-contact.webp',
    },
  ];

  const handleEnquire = (productName) => {
    const message = encodeURIComponent(`Hello Navkar Enterprises, I'm interested in ${productName}`);
    window.open(`https://wa.me/919702624623?text=${message}`, '_blank');
  };

  return (
    <section
      ref={ref}
      data-testid="featured-products-section"
      className="py-24 md:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-primary">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our premium bearing collection
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            whileHover={{ x: 4 }}
            onClick={() => navigate('/products')}
            data-testid="view-all-products-button"
            className="hidden md:flex items-center gap-2 text-primary font-semibold group"
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              data-testid={`featured-product-card-${index}`}
              className="group relative rounded-2xl bg-background border border-border overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs tracking-[0.2em] uppercase font-semibold text-primary mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                <button
                  onClick={() => handleEnquire(product.name)}
                  data-testid={`enquire-button-${index}`}
                  className="w-full py-3 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-background transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-12 text-center md:hidden"
        >
          <button
            onClick={() => navigate('/products')}
            data-testid="view-all-products-button-mobile"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-background font-semibold"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;