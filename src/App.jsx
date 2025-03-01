import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Hero from './components/HeroSection';
import Services from './components/ServicesSection';
import About from './components/AboutUsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import GlowSignLed from './components/services/GlowSignLed';
import OutdoorWallGraphic from './components/services/OutdoorWallGraphic';
import DugoutBranding from './components/services/DugoutBranding';
import OfficeWallGraphic from './components/services/OfficeWallGraphic';
import ReflectiveDirectionSigns from './components/services/ReflectiveDirectionSigns';
import PoleKiosk from './components/services/PoleKiosk';
import FleetGraphics from './components/services/FleetGraphics';
import ThermocolLetterCutout from './components/services/ThermocolLetterCutout';
import CarWrapping from './components/services/CarWrapping';
import BacklitSignages from './components/services/BacklitSignages';
import FreeStandingUnits from './components/services/FreeStandingUnits';
import BoundaryRope from './components/services/BoundaryRope';
import PromotionalFoldingKiosk from './components/services/PromotionalFoldingKiosk';
import MallFaciaBranding from './components/services/MallFaciaBranding';
import TShirtPrinting from './components/services/TShirtPrinting';
import AcrylicDispensers from './components/services/AcrylicDispensers';
import EventBackdrop from './components/services/EventBackdrop';
import VinylWrapCars from './components/services/VinylWrapCars';
import PromotionTableUmbrella from './components/services/PromotionTableUmbrella';
import InStoreBranding from './components/services/InStoreBranding';
import CustomizedBags from './components/services/CustomizedBags';
import Novelties from './components/services/Novelties';
import PromotionStandeeKiosk from './components/services/PromotionStandeeKiosk';
import FrostedGlassPrint from './components/services/FrostedGlassPrint';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 700);
    const hideTimer = setTimeout(() => setIsLoading(false), 1200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {isLoading ? (
          <Loading isFading={isFading} />
        ) : (
          <>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Services />
                      <About />
                      <Contact />
                    </>
                  }
                />
                <Route path="/services/glow-sign-led" element={<GlowSignLed />} />
                <Route path="/services/outdoor-wall-graphic" element={<OutdoorWallGraphic />} />
                <Route path="/services/dugout-branding" element={<DugoutBranding />} />
                <Route path="/services/office-wall-graphic" element={<OfficeWallGraphic />} />
                <Route path="/services/reflective-direction-signs" element={<ReflectiveDirectionSigns />} />
                <Route path="/services/pole-kiosk" element={<PoleKiosk />} />
                <Route path="/services/fleet-graphics" element={<FleetGraphics />} />
                <Route path="/services/thermocol-letter-cutout" element={<ThermocolLetterCutout />} />
                <Route path="/services/car-wrapping" element={<CarWrapping />} />
                <Route path="/services/backlit-signages" element={<BacklitSignages />} />
                <Route path="/services/free-standing-units" element={<FreeStandingUnits />} />
                <Route path="/services/boundary-rope" element={<BoundaryRope />} />
                <Route path="/services/promotional-folding-kiosk" element={<PromotionalFoldingKiosk />} />
                <Route path="/services/mall-facia-branding" element={<MallFaciaBranding />} />
                <Route path="/services/t-shirt-printing" element={<TShirtPrinting />} />
                <Route path="/services/acrylic-dispensers" element={<AcrylicDispensers />} />
                <Route path="/services/event-backdrop" element={<EventBackdrop />} />
                <Route path="/services/vinyl-wrap-cars" element={<VinylWrapCars />} />
                <Route path="/services/promotion-table-umbrella" element={<PromotionTableUmbrella />} />
                <Route path="/services/in-store-branding" element={<InStoreBranding />} />
                <Route path="/services/customized-bags" element={<CustomizedBags />} />
                <Route path="/services/novelties" element={<Novelties />} />
                <Route path="/services/promotion-standee-kiosk" element={<PromotionStandeeKiosk />} />
                <Route path="/services/frosted-glass-print" element={<FrostedGlassPrint />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;