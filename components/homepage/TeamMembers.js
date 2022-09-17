import React, { useEffect } from 'react';
import gsap from "gsap";

const teamMembers = [
  {
    imageUrl: 'images/members/member1.png',
  },
  {
    imageUrl: 'images/members/member2.png'
  },
  {
    imageUrl: 'images/members/member3.png',
    imgStyle: 'firstImage'
  },
  {
    imageUrl: 'images/members/member1.png'
  },
  {
    imageUrl: 'images/members/member2.png'
  },
  {
    imageUrl: 'images/members/member3.png'
  },
]

export default function TeamMembers() {

  useEffect(() => {
    var bannerControllerVideo = new ScrollMagic.Controller();
    var tween = new TimelineMax().to(".image-groups-items", 1, {
      borderRadius: 0,
      scale: 1.2
    });
    // build scene
    new ScrollMagic.Scene({
      triggerElement: "#pinContainerPortfolio",
      triggerHook: 0.8,
      duration: 700,
    })
      .setTween(tween)
      .addTo(bannerControllerVideo)
    // .addIndicators();
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray('.mamber-img');

    gsap.to(sections, {
      xPercent: -60 * (sections.length - 1),
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '#pinContainerPortfolio',
        pin: true,
        scrub: true,
        start: "top 85px",
        // markers: true,
        end: "+=350%",
      },
    });
  }, [])



  return (
    <section id="pinContainerPortfolio" className='image-groups-section'>
      <div className="image-groups-items">
        <div id="container" className='d-flex'>
          {teamMembers.map((item, index) => (
            <div className="member-image panel" key={index}>
              <img src={item.imageUrl} alt="" className={`mamber-img ${item.imgStyle}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}