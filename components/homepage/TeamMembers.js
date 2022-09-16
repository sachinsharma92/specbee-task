import React, { useEffect } from 'react';
import gsap from "gsap";

const teamMembers = [
  {
    imageUrl: '../../static/members/member1.png'
  },
  {
    imageUrl: '../../static/members/member2.png'
  },
  {
    imageUrl: '../../static/members/member3.png'
  },
  {
    imageUrl: '../../static/members/member1.png'
  },
  {
    imageUrl: '../../static/members/member2.png'
  },
  {
    imageUrl: '../../static/members/member3.png'
  },
]

export default function TeamMembers() {
  useEffect(() => {
    var bannerControllerVideo = new ScrollMagic.Controller();
    var tween = new TimelineMax().to(".image-groups-items", 1, {
      borderRadius: 0,
      scale: 1
    });

    // build scene
    new ScrollMagic.Scene({
      triggerElement: "#trigger_element2",
      triggerHook: "onEnter",
      duration: 700,
    })
      .setTween(tween)
      .addTo(bannerControllerVideo)
    // .addIndicators();


    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -35 * (sections.length + 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".image-groups-section",
        pin: true,
        scrub: 1,
        end: "+=2500",
      }
    });
  }, [])

  return (
    <section id="pinContainerPortfolio" className='image-groups-section'>
      <div id="trigger_element2" className="spacer s0" />
      <div className="image-groups-items">
        {teamMembers.map((item, index) => (
          <div className="member-image panel" key={index}>
            <img src={item.imageUrl} alt="" className='mamber-img' />
          </div>
        ))}
      </div>
    </section>
  )
}