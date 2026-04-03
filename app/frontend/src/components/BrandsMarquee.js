import { motion } from 'framer-motion';

const BrandsMarquee = () => {
  const brands = [
    { name: 'SKF', logo: '/images/skf.webp' },
    { name: 'FAG', logo: '/images/fag.webp' },
    { name: 'TIMKEN', logo: '/images/timken.webp' },
    { name: 'NSK', logo: '/images/nsk.webp' },
    { name: 'NACHI', logo: '/images/nachi.webp' },
    { name: 'NTN', logo: '/images/ntn.webp' },
    { name: 'IKO', logo: '/images/iko.webp' },
    { name: 'INA', logo: '/images/ina.webp' },
    { name: 'NBC', logo: '/images/NBC.webp' }
  ];

  return (
    <section className="py-8 sm:py-12 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-10 sm:mb-14">
        <h3 className="text-xl sm:text-2xl font-bold tracking-widest text-primary">
          WE SUPPLY ALL TYPES OF BEARINGS AND IN ALL BRANDS!!
        </h3>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-20 sm:w-28 md:w-36 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
