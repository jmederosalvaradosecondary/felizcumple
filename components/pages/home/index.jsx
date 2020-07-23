import React from "react";
import HeroSection from "./hero-section";
import FamilySection from "./family-section";
import DisfunctionalFamilySection from "./disfunctional-family-section";
import FriendsSection from "./friends-section";
import LoveSection from "./love-section";

function Home() {
  return (
    <>
      <HeroSection />
      <FamilySection />
      <DisfunctionalFamilySection />
      <FriendsSection />
      <LoveSection />
    </>
  );
}

export default Home;
