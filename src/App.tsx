import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Events from "./pages/Events";
import Contact from "./components/Contact";
import BookDemo from "./components/BookDemo";
import ScrollToTop from "./components/ScrollToTop";
import SidebarCTA from "./pages/SidebarCTA";
// import translations from "./components/translations";

const App: React.FC = () => {
  

  // 🔹 Hide Google Translate banner + popup if it appears
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const iframe = document.querySelector("iframe.goog-te-banner-frame");
  //     if (iframe) (iframe as HTMLElement).style.display = "none";

  //     const banner = document.querySelector(".goog-te-banner-frame");
  //     if (banner) banner.remove();

  //     const ratingPopup = document.querySelector(".VIpgJd-ZVi9od-ORHb-OEVmcd");
  //     if (ratingPopup) ratingPopup.remove();

  //     document.body.style.top = "0px";
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Router>
      <ScrollToTop />
      <SidebarCTA />
      
      <div className="md:min-h-screen min-h-screen flex flex-col pt-16">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/bookingform" element={<BookDemo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* Example Translated Text */}
        {/* <div className="text-center p-4">
          <h1>{translations[lang].heading}</h1>
          <p>{translations[lang].description}</p>
        </div> */}
      </div>
    </Router>
  );
};

export default App;
