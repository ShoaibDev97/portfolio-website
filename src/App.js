import React, { useEffect, useRef, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Packages from "./components/packages/Packages";
import Partners from "./components/partners/Partners";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Widget from "./components/widget/Widget";
import ScrollSpy from "react-ui-scrollspy";

const App = () => {
  const [selectedNav, setSelectedNav] = useState("home");

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
      <Widget />
      <Cursor />
    </React.Fragment>
  )
}
export default App