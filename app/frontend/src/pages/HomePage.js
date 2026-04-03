import { useEffect } from 'react';
import Hero from '../components/Hero';
import BrandsMarquee from '../components/BrandsMarquee';
import AboutUs from '../components/AboutUs';
import FeaturedProducts from '../components/FeaturedProducts';
// import StatsCounter from '../components/StatsCounter';
import WhyUs from '../components/WhyUs';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const HomePage = () => {
  useSmoothScroll();

  return (
    <div className="home-page">
      <Hero />
      <BrandsMarquee />
      <AboutUs />
      <FeaturedProducts />
      {/* <StatsCounter /> */}
      <WhyUs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
