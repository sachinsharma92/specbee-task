import React, { useEffect } from 'react'

export default function ImageBanner() {
  useEffect(() => {
    var bannerControllerVideo = new ScrollMagic.Controller();
    var tween = new TimelineMax().to(".image-banner-section", 1, {
      borderRadius: 0,
      scale: 1
    });

    // build scene
    new ScrollMagic.Scene({
      triggerElement: "#trigger_element1",
      triggerHook: "onEnter",
      duration: 700,
    })
      .setTween(tween)
      .addTo(bannerControllerVideo)
  }, [])


  useEffect(() => {
    var bannerControllerVideo2 = new ScrollMagic.Controller();
    var tween = new TimelineMax().to(".image-banner-section .theme-primary", 1, {
     opacity: 1
    });

    // build scene
    new ScrollMagic.Scene({
      triggerElement: "#trigger_element1",
      triggerHook: 0.4,
      duration: 700,
    })
      .setTween(tween)
      .addTo(bannerControllerVideo2)
  }, [])


  return (
    <section className='image-banner-section'>
      <div id="trigger_element1" className="spacer s0" />
      <div className="banner">
        <img src="../../static/banner.jpg" className='banner-img' alt="" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="title1 theme-primary">Quam in auctor <br /> odio viverra</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}