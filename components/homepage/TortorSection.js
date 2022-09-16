import React, { useEffect } from 'react'
import ButtonPrimary from '../buttonPrimary/ButtonPrimary'

export const TortorSection = () => {
  useEffect(() => {
    var ArrowLineController = new ScrollMagic.Controller();
    var tweenArrow = new TimelineMax().to(".section-tortor .arrow-long", 1, {
      left: '0'
    });

    // build scene
    new ScrollMagic.Scene({
      triggerElement: "#trigger_element3",
      triggerHook: 0.9,
      duration: 700,
    })
      .setTween(tweenArrow)
      .addTo(ArrowLineController)
      .addIndicators('saskoasjao');
  }, [])


  return (
    <section className='section-tortor'>
      <div id="trigger_element3" className="spacer s0" />
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <h3 className="title3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam vel rhoncus, nisl tellus ultricies facilisis ac suspendisse.</h3>
          </div>
          <div className="col-sm-5">
            <h2 className="title1 theme-primary">Tortor arcu, ornare risus.</h2>
          </div>
        </div>
      </div>

      <div className="button-arrow-section">
        <img src="../../static/long-arrow.svg" alt="" className='arrow-long' />
        <ButtonPrimary title="Join today" iconRight />
      </div>
    </section>
  )
}
