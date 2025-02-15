import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Hero } from "./components/Hero/Hero";
import { Quote } from "./components/Quote/Quote";
import { Services } from "./components/Services/Services";
import { Insights } from "./components/Insights/Insights";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { YouTubeSection } from "./components/YouTube/YouTubeSection";
import { Footer } from "./components/Footer/Footer";
import { Privacy } from "./components/Footer/Privacy";
import { Terms } from "./components/Footer/Terms";
import { Disclaimer } from "./components/Footer/Disclaimer";
import { BookingNote } from "./components/Booking/BookingNote";

const HomePage = () => {
  const navItems = [
    { label: "SPEAKING", href: "#services" },
    { label: "INSIGHTS", href: "#insights" },
    { label: "VIDEOS", href: "#videos" },
    { label: "CONTACT", href: "#contact" },
  ];

  const videos = [
    {
      id: "erHbHS4YqzQ",
      title: "Transformative Leadership",
      description: "Empowering through trust and purpose",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation items={navItems} />
      <Hero />
      <Quote
        text="Great leaders don’t command excellence. They create the conditions for it"
        author="Haydar Al-Rikabi"
      />
      <Services />
      <Insights />
      <YouTubeSection videos={videos} />
      <Newsletter />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingNote />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Router>
  );
};

export default App;
