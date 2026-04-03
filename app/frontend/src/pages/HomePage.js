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
        <title>Navkar Enterprises | Top Bearing Supplier & Importer in Mumbai</title>
        <meta name="description" content="Navkar Enterprises is Mumbai's leading industrial bearing supplier and stockist. We distribute top brands like SKF, FAG, NSK, TIMKEN, and NTN across India at wholesale prices." />
        <meta name="keywords" content="Best bearing supplier in Mumbai, Bearing distributor India, SKF dealer, FAG stockist, NSK importer, Industrial bearings, Wholesale bearing dealers" />
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
