import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileNavOverlay from "../components/MobileNavOverlay";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div id="layout">
      <ScrollToTop />
      <Navbar isOpen={navOpen} setIsOpen={setNavOpen} />
      {navOpen && <MobileNavOverlay setIsOpen={setNavOpen} />}
      <main>
        <Outlet />
      </main>
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}
