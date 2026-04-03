import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Filter } from "lucide-react";
import Footer from "../components/Footer";
import { useInView } from "../hooks/useInView";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const ProductsPage = () => {
  useSmoothScroll();

  const [activeFilter, setActiveFilter] = useState("All");
  const [ref, isInView] = useInView();

  const categories = [
    "All",
    "Ball Bearings",
    "Roller Bearings",
    "Mounted Units",
  ];

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
      category: 'Roller Bearings',
      image: '/images/spherical-roller.webp',
    },
    {
      name: 'Needle Roller Bearing',
      category: 'Roller Bearings',
      image: '/images/needle-roller.webp',
    },
    {
      name: 'Thrust Ball Bearing',
      category: 'Ball Bearings',
      image: '/images/thrust-bearing.webp',
    },
    {
      name: 'Self Aligning Ball Bearing',
      category: 'Ball Bearings',
      image: '/images/self-aligning.webp',
    },
    {
      name: 'Angular Contact Ball Bearing',
      category: 'Ball Bearings',
      image: '/images/angular-contact.webp',
    },
    {
      name: 'Cylindrical Roller Bearing',
      category: 'Roller Bearings',
      image: '/images/cylindrical-roller.webp',
    },
    {
      name: 'Flange Bearing',
      category: 'Mounted Units',
      image: '/images/flange.webp',
    },
    {
      name: 'Take-Up Bearing',
      category: 'Mounted Units',
      image: '/images/take-up.webp',
    },
    {
      name: 'Thermoplasted Mounted Bearing',
      category: 'Mounted Units',
      image: '/images/thermoplasted-mounted.webp',
    },
  ];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const handleEnquire = (productName) => {
    const message = encodeURIComponent(
      `Hello Navkar Enterprises, I'm interested in ${productName}`
    );
    window.open(`https://wa.me/919702624623?text=${message}`, "_blank");
  };

  return (
    <div data-testid="products-page" className="min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-primary">
                Our Products
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Premium <span className="text-primary">Bearing Collection</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of high-quality bearings for every industrial application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 sticky top-20 z-30 border-b backdrop-blur-xl bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-4 overflow-x-auto">
          <Filter className="w-5 h-5 text-muted-foreground" />

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full ${activeFilter === category
                  ? "bg-primary text-white"
                  : "bg-card hover:bg-primary/10"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name + index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border overflow-hidden flex flex-col h-full bg-card"
            >
              <div className="aspect-square w-full flex items-center justify-center bg-white border-b">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 mix-blend-multiply"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-primary mb-2">{product.category}</p>
                <h3 className="text-xl font-semibold mb-3">{product.name}</h3>

                {product.description && (
                  <p className="text-sm text-muted-foreground my-3">
                    {product.description}
                  </p>
                )}

                <div className="mt-auto pt-4">
                  <button
                    onClick={() => handleEnquire(product.name)}
                    className="w-full py-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center gap-2 transition-all"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;