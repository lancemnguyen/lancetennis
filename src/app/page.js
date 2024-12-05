"use client";

import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';
import Services from '../components/Services';
import Infographics from '../components/Infographics';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <main>
      <Header />
      <Main />
      <Gallery />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Infographics />
      <Footer />
    </main>
  );
}

export default Page;