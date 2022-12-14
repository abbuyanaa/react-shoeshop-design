import React from "react";
import Header from "../components/Header";
import ShopSection from "../components/HomeComponents/ShopSection";
import ContactInfo from "../components/HomeComponents/ContactInfo";
import CalltoActionSection from "../components/HomeComponents/CalltoActionSection";
import Footer from "../components/Footer";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <ShopSection />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
