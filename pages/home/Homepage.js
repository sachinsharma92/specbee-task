import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Floating from '../../components/floating/Floating';
import ImageBanner from '../../components/homepage/ImageBanner';
import SixMillion from '../../components/homepage/SixMillion';
import TeamMembers from '../../components/homepage/TeamMembers';
import { TortorSection } from '../../components/homepage/TortorSection';
import HeroSection from '../../components/homepage/HeroSection';
import Consectetur from '../../components/homepage/Consectetur';



export default function Homepage() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 560;
      setScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);


  return (
    <div className={`homepage-style ${scroll ? 'dark-theme-active' : ''}`}>
      <Header />

      <main className='component-section'>

        <HeroSection />

        <ImageBanner />

        <TortorSection />

        <SixMillion />

        <TeamMembers />

        <Consectetur />

        <Floating id="customID" />

        <Footer />
      </main>
    </div>
  )
}
