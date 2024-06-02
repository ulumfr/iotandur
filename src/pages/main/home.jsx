import React from "react";
import FaqSection from "./faq/faq";
import HeroSection from "./hero/hero";
import JelajahSection from "./jelajah/jelajah";
import BenefitSection from "./benefit/benefit";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <JelajahSection />
      <BenefitSection />
      <FaqSection />
    </>
  );
};

export default HomePage;
