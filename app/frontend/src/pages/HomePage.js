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

import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  useSmoothScroll();

  return (
    <div className="home-page">
      <Helmet>
        <title>Navkar Enterprises | Premium Bearing Supplier & Stockist</title>
        <meta name="description" content="Navkar Enterprises is a leading supplier and stockist of premium bearings. We supply SKF, FAG, TIMKEN, NSK, and more with 20+ years of industrial experience." />
      </Helmet>
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
