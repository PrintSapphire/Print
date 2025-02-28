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

import React from 'react';
import Navbar from './components/Header';
import Hero from './components/HeroSection';
import Services from './components/ServicesSection';
import About from './components/AboutUsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;