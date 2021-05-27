import React from "react";
import "normalize.css";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import LogoClouds from "./components/LogoClouds/LogoMain.jsx";
import FeatureMultiple from "./components/FeatureMultiple/Feature.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Stats from "./components/Stats/Stats.jsx";
import FeatureFive from "./components/FeatureFive/FeatureFive.jsx";
import FeatureSix from "./components/FeatureSix/FeatureSix.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Hero />
        <LogoClouds />
        <FeatureMultiple />
        <Testimonial />
        <Stats />
        <FeatureFive />
        <FeatureSix />
        <CTA />
        <Footer />
      </div>

      <div>
        <span className="small-device">
          Not available on smaller devices yet
        </span>
      </div>
    </>
  );
}

export default App;
