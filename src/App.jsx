import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Progarms from "./Components/Programs/programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title subTitle="Our PROGARM" title="What We Offer" />
      <div className="container"><Progarms /></div>
      <About />
      <Title subTitle="Gallery" title="Campus Photos" />
      <Campus />
      <Title subTitle="Testimonials" title="What Students Say" />
      <Testimonials />
      <Title subTitle="contact us" title="Get in Touch" />
      
        <Contact />
      
      <Footer />
    </>
  );
}

export default App;
