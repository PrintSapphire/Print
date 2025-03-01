// import React from 'react';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import CardsSection from './components/CardsSection';
// import AboutUsSection from './components/AboutUsSection';
// import WhyUsSection from './components/WhyUsSection';
// import ServicesSection from './components/ServicesSection';
// import SocialProofSection from './components/SocialProofSection';
// import TestimonialSection from './components/TestimonialSection';
// import Footer from './components/Footer';
// import Home from './components/Home';
// function App() {
//   return (
//     <div data-layer="Home" className="Home h-screen bg-white flex-col justify-start items-end inline-flex">
//       {/* <Header />
//       <HeroSection />
//       <CardsSection />
//       <AboutUsSection />
//       <WhyUsSection />
//       <ServicesSection />
//       <SocialProofSection />
//       <TestimonialSection />
//       <Footer /> */}
//       {/* <Home/>
//        */}


//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Header';
import Hero from './components/HeroSection';
import Services from './components/ServicesSection';
import About from './components/AboutUsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Set a timer to start fading out after 2.5 seconds, then hide after 3 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 700); // Start fading after 1 seconds

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Hide completely after 1.5 seconds

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoading ? (
        <Loading isFading={isFading} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;