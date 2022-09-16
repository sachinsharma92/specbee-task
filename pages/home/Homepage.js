import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Floating from '../../components/floating/Floating';
import ImageBanner from '../../components/homepage/ImageBanner';
import SixMillion from '../../components/homepage/SixMillion';
import TeamMembers from '../../components/homepage/TeamMembers';
import { TortorSection } from '../../components/homepage/TortorSection';



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
        <section className='hero-section'>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="title1 theme-primary">Eleifend amet in amet.</h1>
                <p className="description">Lorem ipsum dolor consectetur elit. <br />
                  Quam vel rhoncus facilisis ac lectus suspendisse
                </p>
                <img src="../../static/arrow-down.svg" alt="" className='arrow-down' />
              </div>
            </div>
          </div>
        </section>

        <ImageBanner />

        <TortorSection />

        <SixMillion />

        <TeamMembers />

        <section className='consectetur-section'>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam vel rhoncus,tellus ultricies facilisis ac lectus suspendisse. <span>Tortor arcu ornare ut nec risus, id libero auctor id.</span> Nulla est vestibulum elementum bibendum facilisis pellentesque integer. </p>
              </div>
              <div className="col-sm-6">
                <h2 className="title1 theme-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              </div>
            </div>
          </div>
        </section>

        <Floating id="customID" />

        <Footer />
      </main>
    </div>
  )
}
