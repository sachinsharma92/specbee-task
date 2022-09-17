import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);


  return (
    <section className='hero-section' id="pinHitter">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="title1 theme-primary" data-aos="flip-up">Eleifend amet in amet.</h1>
            <p className="description" data-aos="flip-up">
              Lorem ipsum dolor consectetur elit. <br />
              Quam vel rhoncus facilisis ac lectus suspendisse
            </p>
            <img src="images/arrow-down.svg" alt="" className='arrow-down' data-aos="fade-up" data-aos-duration="4300" />
          </div>
        </div>
      </div>
    </section>
  )
}
